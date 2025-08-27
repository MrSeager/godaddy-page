import { useSpring } from '@react-spring/web';

export const useHover = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 110, friction: 10 },
    });

export const useScale = ( del: number ) =>
    useSpring({
        from: { transform: 'scaleY(0)' },
        to: { transform: 'scaleY(1)' },
        config: { tension: 180, friction: 15 },
        delay: del,
    });

export const useSlide = ( onScreen: boolean, x: number, y: number ) => 
    useSpring({
        from: { opacity: 0, transform: `translateX(${x}px)` },
        to : { opacity: onScreen ? 1 : 0, transform: onScreen ? 'translateX(0px)' : `translateX(${x}px)` },
        config: { tension: 180, friction: 20 },
    }); 