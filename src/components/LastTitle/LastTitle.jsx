import React, { useRef, useEffect, useState } from 'react';
import baffle from 'baffle';
import "./LastTitle.css";

function LastTitle() {
    const titleRef = useRef(null);
    const [baffleEffect, setBaffleEffect] = useState(null);

    useEffect(() => {
        const b = baffle(titleRef.current, {
            characters: '█$▓▒░█$▓▒░█▓$▒░█▓▒$░',
            speed: 50
        });
        setBaffleEffect(b);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    b.start();
                    b.reveal(4000);
                }
            },
            {
                threshold: 0.1
            }
        );
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        return () => {
            if (b) {
                b.stop();
            }
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div ref={titleRef} className="last-title">
            <h1 className='last-title big'>"Aesthetic Fashion Experience" </h1>
            <h4 className='last-title small'>Created by Antoine Lacombled</h4>
        </div>
    );
}

export default LastTitle;
