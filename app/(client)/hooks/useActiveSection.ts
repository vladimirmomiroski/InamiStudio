import { useEffect, useState } from 'react';

export function useActiveSection(sections: string[]) {
    const [activeSection, setActiveSection] = useState('#');

    useEffect(() => {
        const visibilityMap: Record<string, number> = {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibilityMap[entry.target.id] = entry.intersectionRatio;
                });

                const mostVisible = Object.entries(visibilityMap).reduce((a, b) =>
                    a[1] > b[1] ? a : b
                );

                if (mostVisible[1] > 0) {
                    setActiveSection(`#${mostVisible[0]}`);
                }
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-110px 0px 0px 0px' }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        // Reset to home when scrolled to top
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('#');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return activeSection;
}