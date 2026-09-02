const scrollKeys = new Set([
    " ",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    "ArrowUp",
    "ArrowDown",
]);

export const lockScroll = () => {
    const options = { passive: false } as const;

    const blockEvent = (event: Event) => {
        if (!event.cancelable) {
            return;
        }

        event.preventDefault();
    };

    const blockKey = (event: KeyboardEvent) => {
        if (!scrollKeys.has(event.key)) {
            return;
        }

        event.preventDefault();
    };

    window.addEventListener("wheel", blockEvent, options);
    window.addEventListener("touchmove", blockEvent, options);
    window.addEventListener("keydown", blockKey, options);

    return () => {
        window.removeEventListener("wheel", blockEvent);
        window.removeEventListener("touchmove", blockEvent);
        window.removeEventListener("keydown", blockKey);
    };
};

export const animateScrollTo = (top: number) =>
    new Promise<void>((resolve) => {
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        const target = Math.max(0, Math.min(top, maxScroll));
        const from = window.scrollY;
        const distance = target - from;

        if (Math.abs(distance) < 1) {
            resolve();
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            window.scrollTo({ top: target, behavior: "instant" });
            resolve();
            return;
        }

        const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.6));
        const startTime = performance.now();

        const step = (now: number) => {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);

            window.scrollTo({
                top: from + distance * eased,
                behavior: "instant",
            });

            if (progress < 1) {
                requestAnimationFrame(step);
                return;
            }

            resolve();
        };

        requestAnimationFrame(step);
    });
