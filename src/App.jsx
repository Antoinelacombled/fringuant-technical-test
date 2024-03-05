import "./App.css";

import {
  RoundedBox,
  ScrollControls,
  Scroll,
  SpotLight,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Character } from "./components/Character";

function App() {
  return (
    <>
      <color attach="background" args={["#111111"]} />
      <ambientLight intensity={2} />
      <SpotLight
        position={[40, 20, 4]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment background preset="warehouse" />
      <OrbitControls />
      <ScrollControls pages={6} damping={0.1}>
        <Scroll>
          <Character rotation={[0, Math.PI, 0]} />
        </Scroll>
        <Scroll html>
          <h1>html in here (optional)</h1>
          <h1 style={{ position: "absolute", top: "100vh" }}>second page</h1>
          <h1 style={{ position: "absolute", top: "200vh" }}>third page</h1>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
