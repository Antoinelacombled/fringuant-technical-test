import React, { useState, useEffect, useRef } from "react";
import { Text } from "@react-three/drei";
import { obfuscateText } from "../../utils/obfuscate-text";

function Header() {
    const originalText = "Antoine Lacombled";
    const [displayText, setDisplayText] = useState(originalText);
    const revealTimeout = useRef();
    const obfuscationTimeout = useRef();

    useEffect(() => {
        obfuscationTimeout.current = setInterval(() => {
            setDisplayText(obfuscateText);
        }, 100);

        revealTimeout.current = setTimeout(() => {
            clearInterval(obfuscationTimeout.current);
            setDisplayText(originalText);
        }, 7000);

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
