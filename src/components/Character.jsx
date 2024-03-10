
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Character(props) {
  const char = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(char.current);
    const center = box.getCenter(new THREE.Vector3());

    char.current.position.x += char.current.position.x - center.x;
    char.current.position.y += char.current.position.y - center.y;
    char.current.position.z += char.current.position.z - center.z;
  }, []);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1;inOut" },
    });

    tl.current
      .to(char.current.rotation, { y: -0.1 }, 1)
      .to(char.current.position, { x: 0.1 }, 1)

      .to(char.current.rotation, { y: 1 }, 6)
      .to(char.current.position, { x: -1 }, 6);
  }, []);

  const { nodes, materials } = useGLTF(
    "../../public/models/cyberpunk_characterglb-transformed.glb"
  );
  return (
    <group ref={char} {...props} dispose={null}>
      <group position={[0, -1.5, -2.3]} name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_68"
          geometry={nodes.Object_68.geometry}
          material={materials.material}
          skeleton={nodes.Object_68.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_70"
          geometry={nodes.Object_70.geometry}
          material={materials.material_3}
          skeleton={nodes.Object_70.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_72"
          geometry={nodes.Object_72.geometry}
          material={materials.material_3}
          skeleton={nodes.Object_72.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_74"
          geometry={nodes.Object_74.geometry}
          material={materials.material}
          skeleton={nodes.Object_74.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_76"
          geometry={nodes.Object_76.geometry}
          material={materials.material}
          skeleton={nodes.Object_76.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
        <skinnedMesh
          name="Object_78"
          geometry={nodes.Object_78.geometry}
          material={materials.material_3}
          skeleton={nodes.Object_78.skeleton}
          rotation={[-Math.PI / 2, Math.PI, -Math.PI]}
          scale={0.017}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cyberpunk_characterglb-transformed.glb");
