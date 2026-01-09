export const LAYOUT = {
    HEADER_HEIGHT: 80, // Height of the fixed header/navbar in pixels
    SCROLL_OFFSET: 80, // SCROLL_OFFSET should match HEADER_HEIGHT usually
};

export const OBSERVER_OPTIONS = {
    SPY: {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // Trigger when section is in middle 40% of screen
        threshold: 0,
    },
    ANIMATION: {
        root: null,
        rootMargin: '0px 0px -20% 0px', // Trigger animation when element enters bottom 20%
        threshold: 0,
    }
};
