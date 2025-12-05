// import { useEffect, useRef, useState } from 'react';

// import Car from "@/assets/svgs/Car";
// import CarPark from "@/assets/svgs/CarPark";

// const AnimatedCarSection = () => {
//     const sectionRef = useRef<HTMLDivElement | null>(null);
//     const [carPosition, setCarPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!sectionRef.current) return;

//             const section = sectionRef.current;
//             const rect = section.getBoundingClientRect();
//             const windowHeight = window.innerHeight;

//             if (rect.top <= windowHeight && rect.bottom >= 0) {
//                 const progress = Math.min(
//                     Math.max((windowHeight - rect.top) / windowHeight, 0),
//                     1
//                 );

//                 const containerWidth = section.offsetWidth;
//                 const targetPosition = containerWidth + 780;

//                 setCarPosition(progress * targetPosition);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div ref={sectionRef} className="flex justify-between items-end relative">
//             <div
//                 style={{
//                     transform: `translateX(${carPosition}px)`,
//                     transition: 'transform 1s ease-in-out'
//                 }}
//             >
//                 <Car />
//             </div>
//             <CarPark />
//         </div>
//     );
// };

// export default AnimatedCarSection;


import { useEffect, useRef, useState } from 'react';
import Car from "@/assets/svgs/Car";
import CarPark from "@/assets/svgs/CarPark";

const AnimatedCarSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [carPosition, setCarPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const progress = Math.min(
                    Math.max((windowHeight - rect.top) / windowHeight, 0),
                    1
                );

                // Stop 90% across the viewport
                const targetPosition = window.innerWidth * 1.35;

                setCarPosition(progress * targetPosition);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="flex justify-between items-end relative">
            <div
                style={{
                    transform: `translateX(${carPosition}px)`,
                    transition: 'transform 1s ease-in-out'
                }}
            >
                <Car />
            </div>
            <div className="ml-auto">
                <CarPark />
            </div>
        </div>
    );
};

export default AnimatedCarSection;
