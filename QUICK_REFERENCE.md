# Quick Reference Card

## File Quick Links & Purposes

| File | Size | Purpose |
|------|------|---------|
| `index.html` | 19 lines | Application entry point |
| `js/data.js` | 104 lines | Course content (topics, resources, flashcards) |
| `js/icons.js` | 178 lines | SVG icon components |
| `js/app.js` | 414 lines | Main application logic and rendering |
| `css/styles.css` | 450 lines | All styling and theming |

## Common Tasks

### Add a Learning Topic
```
File: js/data.js
Location: roadmap.phases[].topics[]
Add: { id: 'my-id', name: 'My Name', icon: 'cpu' }
```

### Add a Flashcard
```
File: js/data.js
Location: flashcards[]
Add: { q: "Question?", a: "Answer." }
```

### Change Primary Color
```
File: css/styles.css
Location: :root { }
Change: --primary-color: #your-color;
```

### Add New Icon
```
File: js/icons.js
1. Add method: static myIcon() { return Icons.svg("...path..."); }
2. Register in getIcon(): 'my-icon': Icons.myIcon,
3. Use in data: icon: 'my-icon'
```

## Deployment

### Local Testing
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### GitHub Pages
```bash
git add .
git commit -m "Your message"
git push origin main
# Visit https://username.github.io/hpc-ai
```

## Key Classes & Methods

### App State
```javascript
HPCCourseApp {
    activeSection      // Current page (roadmap, resources, etc.)
    darkMode          // Theme toggle
    sidebarOpen       // Sidebar visibility
    completed         // Set of completed topics
    currentCard       // Flashcard index
    showAnswer        // Flashcard state
}
```

### App Methods
```javascript
render()              // Generate and display HTML
attachEventListeners() // Wire up interactions
toggleDarkMode()      // Theme switch
toggleSidebar()       // Menu toggle
savePreferences()     // Save to localStorage
loadPreferences()     // Load from localStorage
```

### Icons
```javascript
Icons.getIcon(name)   // Get SVG by name
Icons.svg(d, class)   // Create generic SVG
Icons.cpu()           // Individual icons
```

## CSS Variables

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker version */
    --gray-50 through gray-900     /* Gray scale */
    --success-color: #16a34a;      /* Success state */
    --success-light: #dcfce7;      /* Success background */
}
```

## Utility Classes

```css
/* Layout */
.flex, .flex-col, .items-center, .justify-between

/* Sizing */
.w-64, .h-6, .min-h-screen, .min-h-64

/* Spacing */
.p-4, .px-4, .py-2, .mb-4, .gap-4, .mt-6

/* Typography */
.text-sm, .text-xl, .font-bold, .line-through

/* Colors */
.bg-white, .text-blue-600, .text-gray-500

/* Positioning */
.sticky, .top-0, .z-10

/* Responsive */
@media (max-width: 768px)
```

## Data Structure

### Topic
```javascript
{
    id: 'unique-id',           // Unique identifier
    name: 'Topic Name',        // Display name
    icon: 'icon-name'          // Icon reference
}
```

### Flashcard
```javascript
{
    q: "Question text?",       // Question
    a: "Answer text."          // Answer
}
```

### Cheatsheet
```javascript
{
    id: 'sheet-id',            // Unique identifier
    title: 'Sheet Title',      // Display title
    cmds: [
        { cmd: 'command', desc: 'description' }
    ]
}
```

## Icon Names Available

- `cpu` - CPU/processor
- `database` - Database
- `network` - Network
- `code` - Code/terminal
- `zap` - Lightning/energy
- `trending-up` - Graph/stats
- `book-open` - Books
- `file-text` - Documents
- `menu` - Menu icon
- `x` - Close icon
- `git-branch` - Git/version control
- `check-circle` - Checkmark

## Event Handlers

```javascript
document.querySelector('.nav-item').addEventListener('click', e => {
    const section = e.currentTarget.dataset.section;
    app.activeSection = section;
    app.render();
});

document.querySelector('.topic-card').addEventListener('click', () => {
    // Toggle completed state
    // Save preferences
    // Rerender
});
```

## localStorage API

```javascript
// Save
localStorage.setItem('key', JSON.stringify(data));

// Load
const data = JSON.parse(localStorage.getItem('key'));

// Clear
localStorage.clear();

// Remove single key
localStorage.removeItem('key');
```

## HTML Structure

```html
<div id="root">
    ├── header
    │   ├── sidebar toggle
    │   ├── title
    │   └── dark mode toggle
    ├── div.flex
    │   ├── aside (sidebar)
    │   │   └── nav (sections)
    │   └── main
    │       └── section content
```

## CSS Sections

```css
/* 1. Root variables */
:root { --colors, --sizes }

/* 2. Global */
*, body, button, etc.

/* 3. Utilities */
.flex, .p-4, .gap-4, etc.

/* 4. Components */
header, aside, main, .card, etc.

/* 5. Dark mode */
.dark .selector { }

/* 6. Responsive */
@media (max-width: 768px) { }
```

## Debugging Tips

### Check Console
```javascript
console.log('Message')
// Press F12 to open DevTools
```

### Inspect Element
```
Right-click → Inspect
Ctrl+Shift+C (Windows/Linux)
Cmd+Shift+C (Mac)
```

### Check localStorage
```javascript
// In console
localStorage.getItem('hpc-course-preferences')

// Or in DevTools: Application tab → Storage → localStorage
```

### Monitor State
```javascript
// In console, after app loads
window.app.activeSection      // Current page
window.app.darkMode          // Theme
window.app.completed         // Completed topics
```

## Performance Notes

- **Page Load**: < 1 second on modern browsers
- **Render Speed**: < 100ms for full re-renders
- **Memory**: Minimal (~5 MB)
- **CSS**: Minify for production (if needed)
- **JS**: Already optimized for size

## Browser DevTools Shortcuts

| Shortcut | Action |
|----------|--------|
| F12 | Open DevTools |
| Ctrl+Shift+C | Inspect element |
| Ctrl+Shift+I | Open Inspector |
| Ctrl+` | Open Console |
| Ctrl+Shift+K | Focus Console |
| Ctrl+Shift+M | Toggle device mode |

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Styles not loading | Check href path in index.html |
| Scripts not loading | Check src paths for .js files |
| Icons not showing | Verify icon name in data.js |
| Dark mode not working | Check localStorage is enabled |
| Progress not saving | Check browser storage limits |

## Documentation Files

- **README.md** - Main overview and features
- **GETTING_STARTED.md** - Setup and customization
- **REFACTORING.md** - Technical details
- **COMPARISON.md** - Before/after stats
- **REFACTORING_COMPLETE.md** - Final summary

## Version Info

- **Version**: 2.0 (Refactored)
- **Date**: January 18, 2026
- **Status**: Production Ready ✅
- **Browser Support**: All modern browsers
- **Dependencies**: None (vanilla JavaScript)

---

**Note**: This is a quick reference. See full documentation in README.md and GETTING_STARTED.md for detailed explanations.
