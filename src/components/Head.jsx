import React, { useLayoutEffect, useRef } from "react";
import {
  useGLTF,
  useScroll,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import gsap from "gsap";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
export function Head(props) {
  const { nodes, materials } = useGLTF(
    "../../public/models/Head/scene-transformed.glb"
  );

  const char = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    tl.current

      .to(char.current.rotation, { y: -1 }, 0)
      .to(char.current.position, { x: 1 }, 0)

      .to(char.current.rotation, { y: 1 }, 1)
      .to(char.current.position, { x: -1 }, 1)

      .to(char.current.rotation, { y: 1 }, 2)
      .to(char.current.position, { x: -1 }, 2)


      .to(char.current.rotation, { y: 1 }, 4)
      .to(char.current.rotation, { x: -1 }, 4)
      .to(char.current.position, { x: -1 }, 4)

      .to(char.current.rotation, { y: 1 }, 5)
      .to(char.current.rotation, { x: 0 }, 5)

      .to(char.current.rotation, { y: 7 }, 6)
      .to(char.current.position, { x: 0 }, 6)


  }, []);

  const materialProps = useControls({
    thickness: { value: 0.85, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.8, min: 0, max: 3, step: 0.1 },
    ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.03, min: 0, max: 1 },
    backside: { value: true },
  });

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

useGLTF.preload("../../public/models/Head/scene-transformed.glb");
