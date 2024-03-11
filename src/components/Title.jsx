import { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Title() {
    const textRef = useRef();

    useGSAP(() => {
        gsap.to(textRef.current, { color: "black", duration: 2.5, yoyo: true, repeat: -1 })
    }, {});

    useGSAP(() => {
        const width = 20;
        gsap.to(textRef.current.position, {
            x: -width,
            ease: "none",
            duration: 10,
            repeat: -1,
        });
    }, {});

    return (
        <Text ref={textRef}
            font="../public/Font/NeueMontreal-bold.otf"
            position={[8, 0, -1]}
            fontSize={1.3}
            color="white"
            anchorX="left"
            anchorY="middle"
        >
            "SCROLL TO DISCOVER"
        </Text>
    );
}

export default Title;
