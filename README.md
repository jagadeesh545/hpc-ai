# HPC & AI Systems Engineering Course

A modern, interactive learning platform for High-Performance Computing (HPC) and Artificial Intelligence (AI) systems engineering.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm 8+

### Installation
```bash
git clone https://github.com/yourusername/hpc-ai.git
cd hpc-ai
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173/hpc-ai/](http://localhost:5173/hpc-ai/) in your browser.

### Production Build
```bash
npm run build
```
The `dist/` folder contains production-ready files for GitHub Pages.

## 📋 Features

### Learning Roadmap
- 4 phases of structured learning (Foundations → HPC Core → GPU & AI → Advanced)
- 16 core topics with icons and descriptions
- Click-to-navigate to resources

### Interactive Resources
- Expandable phases and topics
- Organized by resource type (Books, Articles, Videos, Labs)
- Dark mode support
- Persistent preferences with localStorage

### Study Tools
- **Flashcards:** Interactive learning cards with reveal functionality
- **Cheatsheets:** Quick reference commands for Linux and Slurm
- **Summaries:** Key concepts for each topic

### User Experience
- Dark/Light mode toggle
- Responsive mobile-first design
- Persistent user preferences
- Hamburger menu on mobile
- Smooth transitions and animations

## 🛠 Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 18.2 |
| Build Tool | Vite 5.0 |
| Styling | Tailwind CSS 3.3 |
| Icons | Lucide React |
| Testing | Vitest |
| Deployment | GitHub Pages |

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application with state management
├── main.jsx               # React entry point
├── index.css              # Tailwind CSS configuration
├── data.js                # Course content and structure
├── components/
│   ├── Header.jsx         # Top navigation
│   ├── Sidebar.jsx        # Navigation menu
│   └── TopicIcon.jsx      # Dynamic topic icons
└── pages/
    ├── Roadmap.jsx        # Learning roadmap
    ├── Resources.jsx      # Expandable resources
    ├── Cheatsheets.jsx    # Command references
    ├── Flashcards.jsx     # Interactive study cards
    └── Summaries.jsx      # Key concepts
```

## 🎯 Learning Path

### Phase 1: Foundations (4-6 weeks)
- Computer Architecture
- Operating Systems & Linux
- Networking Fundamentals
- Parallel Computing Concepts

### Phase 2: HPC Core (6-8 weeks)
- HPC Cluster Architecture
- Job Schedulers (Slurm, PBS)
- MPI Programming
- OpenMP & Threading

### Phase 3: GPU Computing & AI (6-8 weeks)
- CUDA Programming
- PyTorch & Deep Learning
- Distributed Training
- ML Optimization

### Phase 4: Advanced Topics (4-6 weeks)
- Performance Profiling
- Parallel I/O & Storage
- Containerization
- CI/CD for HPC

## 🚢 Deployment to GitHub Pages

### Automatic with GitHub Actions
1. Push to main branch
2. GitHub Actions automatically builds and deploys

### Manual Deployment
1. Build: `npm run build`
2. Commit dist/ to main branch
3. Push to GitHub
4. Go to Settings → Pages → Select main/dist folder

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🧪 Testing

```bash
npm run test
```

Tests cover core application functionality and data integrity.

## 📚 Resources

- **Learning Materials:** See Resources page in the app
- **Documentation:** See [MIGRATION.md](MIGRATION.md) for technical details
- **Deployment Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)

## 🎨 Customization

### Change Repository Name
Update `vite.config.js`:
```javascript
base: '/your-repo-name/',
```

### Modify Course Content
Edit `src/data.js` with your course structure, topics, and resources.

### Adjust Styling
Tailwind CSS classes are used throughout. Modify `tailwind.config.js` to customize colors and theme.

## 🔧 Development

### Adding a New Page
1. Create `src/pages/YourPage.jsx`
2. Import in `App.jsx`
3. Add to section mapping in `renderContent()`
4. Add navigation item in Sidebar

### Adding Dark Mode Support
All components accept `darkMode` prop:
```jsx
className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
```

## 📦 Build Output

The build process creates:
- `dist/index.html` - HTML entry point (0.55 kB gzip)
- `dist/assets/index-*.css` - Tailwind CSS (2.68 kB gzip)
- `dist/assets/index-*.js` - React + app code (146.84 kB gzip)

Total: ~150 kB gzip (production size)

## 🐛 Troubleshooting

### App not showing styles
- Clear cache: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

### GitHub Pages shows 404
- Verify `base: '/hpc-ai/'` in `vite.config.js` matches repo name
- Check repository settings → Pages

### Icons not displaying
- Verify Lucide React is installed: `npm list lucide-react`
- Check TopicIcon component mapping in `src/components/TopicIcon.jsx`

## 📝 License

MIT License - feel free to use and modify

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions, open a GitHub issue in the repository.

---

**Last Updated:** 2024  
**React Version:** 18.2.0  
**Vite Version:** 5.0.8+  
**Node Version Required:** 16+

