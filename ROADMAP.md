# Project Roadmap

This document outlines our high-level development goals.

---

## 🚀 Up Next

These are our immediate priorities.

- **Structured Error Handling**: Replace all `console.error` and `console.warn` calls with a proper error class system.

- **Refactor Caching Layer**:

  - Replace the custom in-memory cache with the `node-cache` library.

  - Implement `cache-control` headers and update mock clients to respect them.

---

## 🔮 Future Goals

These are features we are considering for the long term.

- **New Features**:

  - Investigate adding support for minievm and miniwasm.
