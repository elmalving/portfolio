import { useEffect, useState } from 'react';

export const useIsSmallWindow = (breakpoint = 768): boolean => {
    const [isSmallWindow, setIsSmallWindow] = useState(
        window.innerWidth < breakpoint
    );

    useEffect(() => {
        const checkWindowSize = () => {
            setIsSmallWindow(window.innerWidth < breakpoint);
        };

        window.addEventListener('resize', checkWindowSize);
        return () => window.removeEventListener('resize', checkWindowSize);
    }, [breakpoint]);

    return isSmallWindow;
};
