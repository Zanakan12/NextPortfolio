/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",             // pour Go, HTML, CSS, JS, Java, SQLite, C, C++, Python, Linux, SQL, Django, React, Next.js, Git, Figma, VS Code, Docker
      "www.rust-lang.org",             // pour Rust
      "raw.githubusercontent.com",    // pour Dear ImGui
      "developer.android.com",         // pour Android Studio
      "upload.wikimedia.org",          // pour Qt Creator
      "appinventor.mit.edu",            // pour MIT App Inventor
      "www.shutterstock.com",          // pour UML
      "www.svgrepo.com",               // pour API
      "static-00.iconduck.com",        // pour WebSocket
    ],
  },
};

module.exports = nextConfig;
