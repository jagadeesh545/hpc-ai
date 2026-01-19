# GitHub Pages Deployment Guide

## Prerequisites
- Node.js 16+ and npm installed
- Repository pushed to GitHub

## Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the React app:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with production-ready static files.

## GitHub Pages Setup

### Option 1: Using `dist/` folder (Recommended for Single Branch)

1. Ensure `dist/` folder is committed to git (remove from .gitignore if needed)
2. Go to repository **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** (or your branch)
   - Folder: **/ (root)** or **/dist** if you use subtree
4. Click Save

### Option 2: Using GitHub Actions (Recommended for Automation)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: npm
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Pages
        uses: actions/upload-pages-artifact@v2
        with:
          path: 'dist'
```

## Local Testing

```bash
npm run dev      # Start dev server on http://localhost:5173/hpc-ai/
npm run preview  # Preview production build on http://localhost:4173/hpc-ai/
```

## Important Notes

- **Base Path:** The app is configured with `base: '/hpc-ai/'` in `vite.config.js`. This assumes your repository is named `hpc-ai`.
- **Repository Name:** If your repo has a different name, update `vite.config.js`:
  ```javascript
  base: '/your-repo-name/',
  ```

## File Structure

```
hpc-ai/
├── src/
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # React entry point
│   ├── index.css         # Tailwind CSS
│   ├── data.js           # Course data
│   ├── components/       # Reusable components
│   └── pages/            # Page components
├── dist/                 # Built static files (GitHub Pages serves from here)
├── index.html            # HTML template
├── vite.config.js        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and build scripts
```

## Troubleshooting

**App not loading on GitHub Pages:**
- Check that `base: '/hpc-ai/'` matches your repository name
- Ensure you're serving from the correct branch/folder in Settings
- Check browser console for errors

**Styles not loading:**
- Tailwind CSS is included in the build
- Check that CSS file is in dist/assets/

**Pages route not working:**
- Since this is a single-page app, GitHub Pages automatically routes to index.html
