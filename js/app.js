// Main Application Logic
class HPCCourseApp {
    constructor() {
        this.activeSection = 'roadmap';
        this.darkMode = false;
        this.sidebarOpen = true;
        this.completed = new Set();
        this.currentCard = 0;
        this.showAnswer = false;
        
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
        this.loadPreferences();
    }

    loadPreferences() {
        // Load saved preferences from localStorage
        const saved = localStorage.getItem('hpc-course-preferences');
        if (saved) {
            const prefs = JSON.parse(saved);
            this.darkMode = prefs.darkMode || false;
            this.completed = new Set(prefs.completed || []);
            this.applyDarkMode();
        }
    }

    savePreferences() {
        const prefs = {
            darkMode: this.darkMode,
            completed: Array.from(this.completed)
        };
        localStorage.setItem('hpc-course-preferences', JSON.stringify(prefs));
    }

    render() {
        const root = document.getElementById('root');
        root.innerHTML = this.getHTML();
        this.attachEventListeners();
    }

    getHTML() {
        return `
            <div class="min-h-screen ${this.darkMode ? 'dark' : ''}">
                <div class="min-h-screen ${this.darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${this.darkMode ? 'text-white' : 'text-gray-900'}">
                    ${this.getHeaderHTML()}
                    <div class="flex max-w-7xl mx-auto">
                        ${this.sidebarOpen ? this.getSidebarHTML() : ''}
                        ${this.getMainHTML()}
                    </div>
                </div>
            </div>
        `;
    }

    getHeaderHTML() {
        return `
            <header class="${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'} border-b sticky top-0 z-10">
                <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button id="sidebarToggle" aria-label="Toggle sidebar" class="p-2 ${this.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded">
                            ${this.sidebarOpen ? this.getCloseIcon() : this.getMenuIcon()}
                        </button>
                        <h1 class="text-2xl font-bold">HPC & AI Systems Engineering</h1>
                    </div>
                    <button id="darkModeToggle" aria-label="Toggle dark mode" class="px-4 py-2 ${this.darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg">
                        ${this.darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </header>
        `;
    }

    getSidebarHTML() {
        const sections = [
            { id: 'roadmap', label: 'Roadmap', icon: 'trending-up' },
            { id: 'resources', label: 'Resources', icon: 'book-open' },
            { id: 'summaries', label: 'Summaries', icon: 'file-text' },
            { id: 'cheatsheets', label: 'Cheat Sheets', icon: 'code' },
            { id: 'flashcards', label: 'Flashcards', icon: 'zap' }
        ];

        return `
            <aside class="w-64 ${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'} border-r p-4 min-h-screen">
                <nav class="space-y-2">
                    ${sections.map(item => this.getSidebarItemHTML(item)).join('')}
                </nav>
            </aside>
        `;
    }

    getSidebarItemHTML(item) {
        const isActive = this.activeSection === item.id;
        const bgClass = isActive ? 'bg-blue-600 text-white' : `${this.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`;
        return `
            <button data-section="${item.id}" class="nav-item w-full flex items-center gap-3 px-4 py-2 rounded-lg ${bgClass}" aria-current="${isActive ? 'page' : 'false'}">
                <span class="icon-placeholder" data-icon="${item.icon}"></span>
                ${item.label}
            </button>
        `;
    }

    getMainHTML() {
        return `
            <main class="flex-1 p-8">
                ${this.getSectionHTML()}
            </main>
        `;
    }

    getSectionHTML() {
        switch (this.activeSection) {
            case 'roadmap':
                return this.getRoadmapHTML();
            case 'resources':
                return this.getResourcesHTML();
            case 'cheatsheets':
                return this.getCheatsheetHTML();
            case 'flashcards':
                return this.getFlashcardHTML();
            case 'summaries':
                return this.getSummariesHTML();
            default:
                return '';
        }
    }

    getRoadmapHTML() {
        const phases = courseData.roadmap.phases;
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">Learning Roadmap</h2>
                ${phases.map(phase => this.getPhaseHTML(phase)).join('')}
            </div>
        `;
    }

    getPhaseHTML(phase) {
        return `
            <div class="card border rounded-lg p-6 ${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'}">
                <div class="flex justify-between mb-4">
                    <h3 class="text-xl font-semibold">${phase.title}</h3>
                    <span class="text-sm ${this.darkMode ? 'text-gray-400' : 'text-gray-500'}">${phase.duration}</span>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    ${phase.topics.map(topic => this.getTopicHTML(topic)).join('')}
                </div>
            </div>
        `;
    }

    getTopicHTML(topic) {
        const done = this.completed.has(topic.id);
        const bgClass = done 
            ? (this.darkMode ? 'bg-green-900/20' : 'bg-green-50')
            : (this.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50');
        const borderClass = done ? 'border-green-300' : '';
        
        return `
            <div data-topic-id="${topic.id}" class="topic-card p-4 border rounded-lg cursor-pointer ${bgClass} ${borderClass} ${done ? this.darkMode ? 'border-green-900/50' : 'border-green-300' : ''}">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="icon-placeholder" data-icon="${topic.icon}"></span>
                        <span class="${done ? 'line-through' : ''}">${topic.name}</span>
                    </div>
                    ${done ? `<span class="icon-placeholder" data-icon="check-circle"></span>` : ''}
                </div>
            </div>
        `;
    }

    getResourcesHTML() {
        const resources = courseData.resources;
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">Resources</h2>
                <div class="card border rounded-lg p-6 ${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'}">
                    <h3 class="text-xl font-semibold mb-4">Books</h3>
                    ${resources.books.map((book, i) => `
                        <div class="p-3 mb-2 ${this.darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded">
                            <div class="font-medium">${book.title}</div>
                            <div class="text-sm ${this.darkMode ? 'text-gray-400' : 'text-gray-600'}">${book.author} • ${book.level}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getCheatsheetHTML() {
        const sheets = courseData.cheatsheets;
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">Cheat Sheets</h2>
                ${sheets.map(sheet => `
                    <div class="card border rounded-lg p-6 ${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'}">
                        <h3 class="text-xl font-semibold mb-4">${sheet.title}</h3>
                        ${sheet.cmds.map((item, i) => `
                            <div class="grid grid-cols-2 gap-4 p-3 mb-2 ${this.darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded">
                                <code class="${this.darkMode ? 'text-blue-400' : 'text-blue-600'}">${item.cmd}</code>
                                <span class="${this.darkMode ? 'text-gray-400' : 'text-gray-600'}">${item.desc}</span>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    getFlashcardHTML() {
        const cards = courseData.flashcards;
        const current = cards[this.currentCard];
        
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">Flashcards</h2>
                <div class="max-w-2xl mx-auto">
                    <div class="mb-4 text-center text-sm">Card ${this.currentCard + 1} of ${cards.length}</div>
                    <div id="flashcard" class="${this.darkMode ? 'bg-gray-800' : 'bg-white'} border-2 rounded-lg p-8 min-h-64 flex items-center justify-center cursor-pointer hover:shadow-lg">
                        <div class="text-center">
                            <div class="text-sm ${this.darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4">${this.showAnswer ? 'Answer' : 'Question'}</div>
                            <div class="text-lg">${this.showAnswer ? current.a : current.q}</div>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-6 justify-center">
                        <button id="prevCard" class="px-4 py-2 ${this.darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded ${this.currentCard === 0 ? 'opacity-50' : ''}" ${this.currentCard === 0 ? 'disabled' : ''}>
                            Previous
                        </button>
                        <button id="toggleAnswer" class="px-4 py-2 bg-blue-600 text-white rounded">
                            ${this.showAnswer ? 'Hide' : 'Show'} Answer
                        </button>
                        <button id="nextCard" class="px-4 py-2 ${this.darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded ${this.currentCard === cards.length - 1 ? 'opacity-50' : ''}" ${this.currentCard === cards.length - 1 ? 'disabled' : ''}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getSummariesHTML() {
        const summaries = courseData.summaries;
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">Summaries</h2>
                ${summaries.map(summary => `
                    <div class="card border rounded-lg p-6 ${this.darkMode ? 'bg-gray-800' : 'bg-white'} ${this.darkMode ? 'border-gray-700' : 'border-gray-200'}">
                        <h3 class="text-xl font-semibold mb-4">${summary.title}</h3>
                        <pre class="whitespace-pre-wrap text-sm">${summary.content}</pre>
                    </div>
                `).join('')}
            </div>
        `;
    }

    attachEventListeners() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }

        // Section navigation
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.activeSection = section;
                this.render();
            });
        });

        // Topic completion
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', () => {
                const topicId = card.dataset.topicId;
                if (this.completed.has(topicId)) {
                    this.completed.delete(topicId);
                } else {
                    this.completed.add(topicId);
                }
                this.savePreferences();
                this.render();
            });
        });

        // Flashcard buttons
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.addEventListener('click', () => this.toggleAnswer());
        }

        const prevCard = document.getElementById('prevCard');
        if (prevCard) {
            prevCard.addEventListener('click', () => this.previousCard());
        }

        const nextCard = document.getElementById('nextCard');
        if (nextCard) {
            nextCard.addEventListener('click', () => this.nextCard());
        }

        const toggleAnswer = document.getElementById('toggleAnswer');
        if (toggleAnswer) {
            toggleAnswer.addEventListener('click', () => this.toggleAnswer());
        }

        // Render icons
        this.renderIcons();
    }

    renderIcons() {
        document.querySelectorAll('.icon-placeholder').forEach(placeholder => {
            const iconName = placeholder.dataset.icon;
            const icon = Icons.getIcon(iconName);
            placeholder.innerHTML = '';
            placeholder.appendChild(icon);
        });
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
        this.render();
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        this.applyDarkMode();
        this.savePreferences();
    }

    applyDarkMode() {
        const root = document.getElementById('root');
        if (this.darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }

    toggleAnswer() {
        this.showAnswer = !this.showAnswer;
        this.render();
        this.attachEventListeners();
    }

    previousCard() {
        if (this.currentCard > 0) {
            this.currentCard--;
            this.showAnswer = false;
            this.render();
            this.attachEventListeners();
        }
    }

    nextCard() {
        if (this.currentCard < courseData.flashcards.length - 1) {
            this.currentCard++;
            this.showAnswer = false;
            this.render();
            this.attachEventListeners();
        }
    }

    getMenuIcon() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-6 h-6');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');
        
        const lines = ['M4 6h16M4 12h16M4 18h16'];
        lines.forEach(d => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('d', d);
            svg.appendChild(path);
        });
        
        return svg.outerHTML;
    }

    getCloseIcon() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-6 h-6');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        svg.appendChild(path);
        
        return svg.outerHTML;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HPCCourseApp();
});
