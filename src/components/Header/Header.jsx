import React, { useState, useEffect, useRef } from "react";
import { Text } from "@react-three/drei";

function Header() {
    const originalText = "Antoine Lacombled";
    const [displayText, setDisplayText] = useState(originalText);
    const revealTimeout = useRef(null);
    const obfuscationTimeout = useRef(null);

    const obfuscateText = (text) => {
        return text.split('').map(() => {
            return Math.random() < 0.5 ? originalText.charAt(Math.floor(Math.random() * originalText.length)) : '█▓$░'[Math.floor(Math.random() * 4)];
        }).join('');
    };

    useEffect(() => {
        obfuscationTimeout.current = setInterval(() => {
            setDisplayText(obfuscateText);
        }, 100);

        revealTimeout.current = setTimeout(() => {
            clearInterval(obfuscationTimeout.current);
            setDisplayText(originalText);
        }, 8000);

        return () => {
            clearInterval(obfuscationTimeout.current);
            clearTimeout(revealTimeout.current);
        };
    }, []);

    return (
        <Text
            font="../public/Font/NeueMontreal-bold.otf"
            position={[0, 4, -1]}
            fontSize={0.3}
        >
            {displayText}
        </Text>
    );
}

export default Header;
