# Pull Request: Refactor

## Title: Refactor: modernize index.html and split CSS/JS

### Body:
This PR refactors the project's landing page for maintainability and GitHub Pages compatibility.

### Summary of changes:
- Split styles into assets/css/styles.css
- Split JS into assets/js/main.js
- Added accessibility improvements (skip link, ARIA attributes, keyboard nav)
- Added .nojekyll to prevent GitHub Pages Jekyll processing where needed

### Testing instructions:
1. Checkout branch `refactor`
2. Serve locally (e.g., `python -m http.server`) and open http://localhost:8000
3. Verify header/nav, responsive behavior, and that the current year shows in the footer.

Feel free to request modifications or additional content to include in the PR.