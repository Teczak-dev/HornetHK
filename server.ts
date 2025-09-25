import dialogues from "./dialogues.json" assert { type: "json" };

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // API endpoint - returns random dialogue with random image
    if (url.pathname === "/dialogue") {
      if (dialogues.dialogues.length === 0 || dialogues.images.length === 0) {
        return new Response("No data available", { status: 500 });
      }
      
      const randomDialogue = dialogues.dialogues[Math.floor(Math.random() * dialogues.dialogues.length)]!;
      const randomImage = dialogues.images[Math.floor(Math.random() * dialogues.images.length)]!;
      
      const response = {
        dialogue: randomDialogue.dialogue,
        audio: randomDialogue.audio,
        image: randomImage
      };
      
      return new Response(JSON.stringify(response), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // serve demo page
    if (url.pathname === "/" || url.pathname === "/demo") {
      try {
        const file = Bun.file("./demo/index.html");
        return new Response(file, {
          headers: { "Content-Type": "text/html" },
        });
      } catch {
        return new Response("Demo not found", { status: 404 });
      }
    }

    // public files (images and audio)
    if (url.pathname.startsWith("/public")) {
      try {
        const filePath = `.${url.pathname}`;
        const file = Bun.file(filePath);
        return new Response(file);
      } catch {
        return new Response("File not found", { status: 404 });
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`🚀 Bun API running at http://localhost:${server.port}`);