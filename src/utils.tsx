import { useState, useEffect, useRef, useCallback } from 'react';
const useScrollEffect = (threshold = 0.5) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    const handleIntersect = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setInView(true);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, { threshold });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [handleIntersect, threshold]);

    return [ref, inView];
};