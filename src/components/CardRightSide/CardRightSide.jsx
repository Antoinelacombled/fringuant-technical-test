import "./CardRightSide.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function CardRightSide() {
    const cardOne = useRef();
    const cardTwo = useRef();
    const cardThree = useRef();

    useGSAP(() => {
        const floatAnimation = (target) => {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });
            tl.to(target, { y: '-=20', duration: 3, ease: "power1.inOut" })
                .to(target, { y: '+=20', duration: 3, ease: "power1.inOut" })
                .to(target, { y: '-=15', duration: 3, ease: "power1.inOut" })
                .to(target, { y: '+=15', duration: 3, ease: "power1.inOut" });
            return tl;
        };

        const master = gsap.timeline();
        master.add(floatAnimation(cardOne.current))
            .add(floatAnimation(cardTwo.current), 0)
            .add(floatAnimation(cardThree.current), 0);
    }, []);

    return (
        <div className='cards-container'>
            <div ref={cardOne} className='card-right-side first'>
                <div className='content-container'>
                    <h2 className='content-title'>Tech for design</h2>
                    <p className='content-description'>I designed this site using a solid structure based on ReactJS, GSAP, and ThreeJS. That's how I like to build experiences: sober, technical, and visually pleasing.</p>
                </div>
            </div>
            <div ref={cardTwo} className='card-right-side second'>
                <div className='content-container'>
                    <h2 className='content-title'>Innovative Solutions</h2>
                    <p className='content-description'>My projects focus on delivering innovative solutions that harness the power of modern technology to solve complex problems.</p>
                </div>
            </div>
            <div ref={cardThree} className='card-right-side third'>
                <div className='content-container'>
                    <h2 className='content-title'>Creative Engagement</h2>
                    <p className='content-description'>Engaging users with creative design and interactive elements is at the core of my design philosophy.</p>
                </div>
            </div>
        </div>
    );
}

export default CardRightSide;
