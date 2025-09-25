# 🚀 HornetHK API

A fast and lightweight dialogue API built with Bun that serves random dialogues from Hornet (Hollow Knight) with associated images and audio files. 

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Available Dialogues](#-available-dialogues)
- [Demo](#-demo)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

## ✨ Features

- **Fast Performance**: Built with Bun for lightning-fast API responses
- **Random Dialogues**: Returns random dialogue entries with text, images, and audio
- **Static File Serving**: Serves images and audio files directly
- **Interactive Demo**: Includes a beautiful web demo to test the API
- **TypeScript Support**: Fully typed with TypeScript
- **Simple Setup**: Easy installation and configuration
- **RESTful API**: Clean and simple API design

## 🛠️ Installation

### Prerequisites

- [Bun](https://bun.sh/) runtime installed on your system

### From GitHub

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/HornetHK.git
   cd HornetHK
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start the server**:
   ```bash
   bun run server.ts
   ```

The API will be available at `http://localhost:3000`

## ⚙️ Configuration

### Environment Setup

The server runs on port `3000` by default. You can modify this in `server.ts`:

```typescript
const server = Bun.serve({
  port: 3000, // Change this port if needed
  // ... rest of configuration
});
```

### File Structure for Assets

Place your media files in the following structure:
```
public/
├── images/     # Image files (.jpg, .png, etc.)
└── audio/      # Audio files (.mp3, .wav, etc.)
```

## 🚀 Usage

### Starting the Server

```bash
# Development
bun run server.ts

# Or use bun directly
bun server.ts
```

### Making API Calls

#### Get Random Dialogue

**Request:**
```bash
curl http://localhost:3000/dialogue
```

**Response:**
```json
{
  "dialogue": "Troshi kaleemo",
  "image": "/public/images/Img1.jpg",
  "audio": "/public/audio/TroshiKaleemo.mp3"
}
```

#### JavaScript/Fetch Example

```javascript
async function getRandomDialogue() {
  try {
    const response = await fetch('http://localhost:3000/dialogue');
    const dialogue = await response.json();
    console.log(dialogue);
  } catch (error) {
    console.error('Error fetching dialogue:', error);
  }
}
```

## 📡 API Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/` | Demo page | HTML page |
| `GET` | `/demo` | Demo page | HTML page |
| `GET` | `/dialogue` | Random dialogue | JSON object |
| `GET` | `/public/*` | Static files | File content |
| `GET` | `/static/*` | Static files | File content |

### Response Schema

```typescript
interface Dialogue {
  dialogue: string;  // The dialogue text
  image: string;     // Path to associated image
  audio: string;     // Path to associated audio file
}
```

## 🎭 Available Dialogues

The API currently includes these dialogue entries:

- **Troshi kaleemo**
- **Gola negosa tros**
- **Hakana Segamos**
- **Un Hegale**
- **Laffe nuffe nido**
- **Garama**
- **Haha**
- **HAAAAA!**
- **Shaw!**
- **De!**
- **Edino**
- **Hegale**
- **Get gu**

Each dialogue comes with:
- 🎵 Associated audio file (MP3 format)
- 🖼️ Associated image (JPG format)
- 📝 Unique dialogue text

## 🎨 Demo

Visit `http://localhost:3000` after starting the server to see the interactive demo.

The demo features:
- **Interactive UI**: Click to get random dialogues
- **Audio Playback**: Automatic audio playback with controls
- **Image Display**: Shows associated images
- **JSON Preview**: View raw API responses
- **Responsive Design**: Works on all devices

## 📁 Project Structure

```
HornetHK/
├── server.ts           # Main server file
├── dialogues.json      # Dialogue data
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── bun.lock           # Dependency lock file
├── LICENSE            # License file
├── README.md          # This file
├── demo/              # Demo website
│   ├── index.html     # Demo page
│   └── README.md      # Demo documentation
└── public/            # Static assets
    ├── images/        # Image files
    └── audio/         # Audio files
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues

If you encounter any problems:

1. **Check the Issues**: Look at [existing issues](https://github.com/yourusername/HornetHK/issues) first
2. **Create New Issue**: If your problem isn't listed, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Your system information (OS, Bun version, etc.)

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

### Common Issues

**Q: Getting 404 errors for audio/image files?**
A: Make sure your files are in the `public/` directory and paths in `dialogues.json` start with `/public/`

**Q: Server won't start?**
A: Ensure you have Bun installed and run `bun install` first

**Q: Audio doesn't autoplay?**
A: Modern browsers require user interaction before allowing autoplay. Click the demo button first.

### Getting Help

- 📧 **Email**: [your-email@example.com]
- 💬 **Issues**: [GitHub Issues](https://github.com/yourusername/HornetHK/issues)
- 📖 **Documentation**: Check this README and the `/demo` folder

### Feature Requests

Have an idea for improvement? We'd love to hear it!
- Open an issue with the `enhancement` label
- Describe your feature idea clearly
- Explain how it would benefit users

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

It would be nice if you could mention the original author :)

---

**Made with ❤️ and Bun**

*If you find this project useful, please give it a ⭐ on GitHub!*