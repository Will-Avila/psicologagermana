'use client';

import { useEffect, useRef } from 'react';

/**
 * Watches elements with `data-reveal` attribute and adds the `.is-revealed`
 * class when they enter the viewport.  Adding `data-delay="N"` (ms) staggers
 * the animation for that element.
 */
export function useScrollReveal() {
    const observed = useRef(false);

    useEffect(() => {
        if (observed.current) return;
        observed.current = true;

        const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    const delay = el.dataset.delay ?? '0';
                    setTimeout(() => {
                        el.classList.add('is-revealed');
                    }, Number(delay));
                    observer.unobserve(el);
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
