import "./CardLeftSide.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger);


function CardLeftSide() {

    const cardTopRef = useRef();
    const cardBottomRef = useRef();
    const container = useRef();

    return (
        <>
            <div className="container-card-left" ref={container}>
                <div ref={cardTopRef} className='card-top'>
                </div>
                <div ref={cardBottomRef} className='card-bottom'>
                </div>
            </div>
        </>
    );
}

export default CardLeftSide;
