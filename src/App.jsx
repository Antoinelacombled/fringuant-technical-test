import "./App.css";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  RoundedBox,
  ScrollControls,
  Scroll,
  SpotLight,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";

import { Head } from "./components/Head";

gsap.registerPlugin(useGSAP);

function App() {

  const title = useRef();

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.App',
        start: "top",
        end: "bottom",
        markers: true,
      },
    })
      .to(title.current, {
        x: 1000,
        duration: 2,
        ease: "none",
        color: "black",
      })
  }, []);


  return (
    <>
      <color attach="background" args={["#111111"]} />
      <ambientLight intensity={1} />

      <SpotLight
        position={[40, 20, 4]}
        angle={9.3}
        penumbra={1}
        castShadow
        intensity={1}
        shadow-bias={-0.0001}
      />
      <Environment preset="sunset" />
      <ScrollControls pages={6} damping={0.1}>
        <Head scale={1.5} />
        <Scroll>
          <Text ref={title}
            font="../public/Font/NeueMontreal-bold.otf"
            position={[0, 0, -1]}
            fontSize={1.5}
            color="white"
          >
            "SCROLL TO DISCOVER"
          </Text>
        </Scroll>
        <Scroll html>
          <h1
            className="h1"
            style={{
              font: "../public/Font/NeueMontreal-Bold.otf",
              top: "65vh",
              left: "50%",
              fontSize: "15em",
            }}
          ></h1>

          <h1 style={{ color: "white", position: "absolute", top: "100vh" }}>
            second page
          </h1>
          <h1 style={{ color: "white", position: "absolute", top: "200vh" }}>
            third page
          </h1>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
