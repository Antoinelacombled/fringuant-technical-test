import { useRef } from "react";
import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import "../../src/Title.css";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Title() {

    const groupRef = useRef();
    const textRef = useRef();


    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: groupRef.current,
    //     }
    // });

    useGSAP(() => {
        gsap.to(textRef.current, { color: "black", duration: 3, yoyo: true, repeat: -1 })
    }, { scope: groupRef });

    return (
        <group ref={groupRef}>
            <Text ref={textRef}
                font="../public/Font/NeueMontreal-bold.otf"
                position={[0, 0, -1]}
                fontSize={1.3}
                color="white"
            >
                "SCROLL TO DISCOVER"
            </Text>
        </group>
    );
}

export default Title;
