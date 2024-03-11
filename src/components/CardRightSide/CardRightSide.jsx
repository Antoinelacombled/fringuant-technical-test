import "./CardRightSide.css";

function CardRightSide() {
    return (
        <div className='cards-container'>
            <div className='card-right-side first'>
                <div className='content-container'>
                    <h2 className='content-title'>Tech for design</h2>
                    <p className='content-description'>I designed this site using a solid structure based on ReactJS, GSAP, and ThreeJS. That's how I like to build experiences: sober, technical, and visually pleasing.</p>
                </div>
            </div>
            <div className='card-right-side second'>
                <div className='content-container'>
                    <h2 className='content-title'>Innovative Solutions</h2>
                    <p className='content-description'>My projects focus on delivering innovative solutions that harness the power of modern technology to solve complex problems.</p>
                </div>
            </div>
            <div className='card-right-side third'>
                <div className='content-container'>
                    <h2 className='content-title'>Creative Engagement</h2>
                    <p className='content-description'>Engaging users with creative design and interactive elements is at the core of my design philosophy.</p>
                </div>
            </div>
        </div>
    );
}

export default CardRightSide;
