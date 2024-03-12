import React, { useRef } from "react";
import {
  useGLTF,
  useScroll,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Head(props) {
  const { nodes, materials } = useGLTF(
    "../../scene-transformed.glb"
  );

  const char = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useGSAP(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut", },
    });
    tl.current
      .to(char.current.rotation, { y: -1 }, 0)
      .to(char.current.position, { x: 1 }, 0)
      .to(char.current.rotation, { y: 1 }, 1)
      .to(char.current.rotation, { x: -1 }, 1)
      .to(char.current.position, { x: -1 }, 1)
      .to(char.current.rotation, { y: 1 }, 2)
      .to(char.current.rotation, { x: 0 }, 2)
      .to(char.current.rotation, { y: 7 }, 3)
      .to(char.current.position, { x: 0 }, 3)
  }, []);

  const materialProps = {
    thickness: 1.60,
    roughness: 0.2,
    transmission: 1,
    ior: 1.3,
    chromaticAberration: 0.03,
    backside: true,
  };

  return (
    <group ref={char} {...props} dispose={null}>
      <mesh
        geometry={nodes.BezierCircle_Material001_0.geometry}
        material={materials["Material.001"]}
        position={[0, 0.019, 0.046]}
        rotation={[1.683, 0.002, 0.017]}
        scale={[0.987, 0.987, 1.303]}
      >
        <meshPhysicalMaterial
          color="#000000"
          emissive="#000"
          clearcoat={0.3}
          metalness={1}
          roughness={0.2}
          reflectivity={1}
          iridescence={0.3}
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 1000]}
        />
      </mesh>
      <mesh
        geometry={nodes.headMesh__0.geometry}
        material={materials.headMesh__0}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh
        geometry={nodes.BezierCircle001_Material005_0.geometry}
        material={materials["Material.005"]}
        position={[0, 0.019, 0.046]}
        rotation={[1.683, 0.002, 0.017]}
        scale={[0.987, 0.987, 1.303]}
      />
    </group>
  );
}

useGLTF.preload("../../scene-transformed.glb");
