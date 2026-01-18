// Icon Components
class Icons {
    static svg(d, className = '') {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', `${className} w-5 h-5`);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', d);
        
        svg.appendChild(path);
        return svg;
    }

    static bookOpen() {
        return Icons.svg("M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253");
    }

    static code() {
        return Icons.svg("M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4");
    }

    static fileText() {
        return Icons.svg("M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z");
    }

    static menu() {
        return Icons.svg("M4 6h16M4 12h16M4 18h16");
    }

    static x() {
        return Icons.svg("M6 18L18 6M6 6l12 12");
    }

    static trendingUp() {
        return Icons.svg("M13 7h8m0 0v8m0-8l-8 8-4-4-6 6");
    }

    static zap() {
        return Icons.svg("M13 10V3L4 14h7v7l9-11h-7z");
    }

    static cpu() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-5 h-5');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');

        const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect1.setAttribute('x', '4');
        rect1.setAttribute('y', '4');
        rect1.setAttribute('width', '16');
        rect1.setAttribute('height', '16');
        rect1.setAttribute('rx', '2');
        rect1.setAttribute('stroke-width', '2');
        
        const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect2.setAttribute('x', '9');
        rect2.setAttribute('y', '9');
        rect2.setAttribute('width', '6');
        rect2.setAttribute('height', '6');
        rect2.setAttribute('stroke-width', '2');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2');

        svg.appendChild(rect1);
        svg.appendChild(rect2);
        svg.appendChild(path);
        return svg;
    }

    static database() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-5 h-5');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');

        const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipse.setAttribute('cx', '12');
        ellipse.setAttribute('cy', '5');
        ellipse.setAttribute('rx', '9');
        ellipse.setAttribute('ry', '3');
        ellipse.setAttribute('stroke-width', '2');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5');

        svg.appendChild(ellipse);
        svg.appendChild(path);
        return svg;
    }

    static network() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-5 h-5');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '12');
        circle.setAttribute('cy', '12');
        circle.setAttribute('r', '2');
        circle.setAttribute('stroke-width', '2');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41');

        svg.appendChild(circle);
        svg.appendChild(path);
        return svg;
    }

    static gitBranch() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-5 h-5');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');

        const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.setAttribute('cx', '6');
        circle1.setAttribute('cy', '6');
        circle1.setAttribute('r', '3');
        circle1.setAttribute('stroke-width', '2');
        
        const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle2.setAttribute('cx', '18');
        circle2.setAttribute('cy', '18');
        circle2.setAttribute('r', '3');
        circle2.setAttribute('stroke-width', '2');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M6 9v6a3 3 0 003 3h6');

        svg.appendChild(circle1);
        svg.appendChild(circle2);
        svg.appendChild(path);
        return svg;
    }

    static checkCircle() {
        return Icons.svg("M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z");
    }

    static getIcon(name) {
        const iconMap = {
            'book-open': Icons.bookOpen,
            'code': Icons.code,
            'file-text': Icons.fileText,
            'menu': Icons.menu,
            'x': Icons.x,
            'trending-up': Icons.trendingUp,
            'zap': Icons.zap,
            'cpu': Icons.cpu,
            'database': Icons.database,
            'network': Icons.network,
            'git-branch': Icons.gitBranch,
            'check-circle': Icons.checkCircle
        };
        
        return iconMap[name] ? iconMap[name]() : Icons.code();
    }
}
