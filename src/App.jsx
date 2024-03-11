import "./App.css";
import {
  ScrollControls,
  Scroll,
  Environment,
  Text
} from "@react-three/drei";
import { Head } from "./components/Head";

import Title from "./components/Title";
import CardLeftSide from "./components/CardLeftSide/CardLeftSide";
import CardRightSide from "./components/CardRightSide/CardRightSide";
import LastTitle from "./components/LastTitle/LastTitle";
import Header from "./components/Header/Header";



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
          <Header />
          <Title />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <CardLeftSide />
          <CardRightSide />
          <LastTitle />
        </Scroll>
      </ScrollControls >

    </>
  );
}

export default App;
