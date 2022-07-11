import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const desktopSize = () => (size[0] >= 1224)
    const tabletSize = () => (size[0] >= 768 & size[0] <= 1224)
    const mobileSize = () => (size[0] <= 768)

    return { size, desktopSize, tabletSize, mobileSize };
}