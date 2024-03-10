import "./App.css";
import {
  ScrollControls,
  Scroll,
  Environment,
} from "@react-three/drei";
import { Head } from "./components/Head";

import Title from "./components/Title";
import CardLeftSide from "./components/CardLeftSide/CardLeftSide";
import CardRightSide from "./components/CardRightSide/CardRightSide";



function App() {

  return (
    <>
      <color attach="background" args={["#111111"]} />
      <directionalLight color="white" />
      <ambientLight intensity={1} />
      <Environment preset="warehouse" />
      <ScrollControls pages={6} damping={0.1}>
        <Head scale={1.6} position-y={-0.5} />
        <Scroll>
          <Title />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <CardLeftSide />
          <CardRightSide />
          <h1
            className="h1"
            style={{
              font: "../public/Font/NeueMontreal-Bold.otf",
              position: "relative",
              top: "500vh",
              fontSize: "15em",
            }}
          >fin (l)</h1>
        </Scroll>
      </ScrollControls >

    </>
  );
}

export default App;
