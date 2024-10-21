/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ninh Phạm (https://sketchfab.com/yu.gi_oh2011)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/persian-column-7681c91c201a45b6b38bab03a728d7f4
title: Persian Column
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/soton.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.15}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 11.63, -0.74]} rotation={[0.63, 0, 0]} scale={[0.65, 0.61, 0.33]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['ambientCGMetal042A1K-JPG']} />
          </group>
          <group position={[0, 8.96, 0]} scale={0.19}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['ambientCGMetal042A1K-JPG.003']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['ambientCGMetal042A1K-JPG.003']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['ambientCGMetal042A1K-JPG.003']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 6.8, 0]} rotation={[0, 0.17, 0]} scale={0.17}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 6.8, 0]} rotation={[0, 0.17, 0]} scale={0.17}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['ambientCGMetal042A1K-JPG.007']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['ambientCGMetal042A1K-JPG.007']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['ambientCGMetal042A1K-JPG.007']} />
          </group>
          <group position={[0, 9.87, 0]} scale={0.23}>
            <mesh geometry={nodes.Object_19.geometry} material={materials['ambientCGMetal042A1K-JPG.002']} />
          </group>
          <group position={[0, 9.87, 0]} scale={0.24}>
            <mesh geometry={nodes.Object_21.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 6.8, 0]} rotation={[0, Math.PI / 8, 0]} scale={0.19}>
            <mesh geometry={nodes.Object_23.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['ambientCGMetal042A1K-JPG.005']} />
          </group>
          <group position={[0, 6.8, 0]} scale={0.19}>
            <mesh geometry={nodes.Object_26.geometry} material={materials['ambientCGMetal042A1K-JPG.002']} />
          </group>
          <group position={[0, 6.82, 0]} scale={[0.19, 0.2, 0.21]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['ambientCGMetal042A1K-JPG.002']} />
          </group>
          <group position={[0, 6.82, 0]} scale={[0.22, 0.2, 0.22]}>
            <mesh geometry={nodes.Object_30.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 6.8, 0]} scale={0.2}>
            <mesh geometry={nodes.Object_32.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 7.01, 0]} rotation={[0, -0.2, 0]} scale={[0.51, 0.36, 0.51]}>
            <mesh geometry={nodes.Object_34.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['ambientCGMetal042A1K-JPG.006']} />
          </group>
          <group position={[0, 10.17, 0]} scale={[0.61, 0.56, 0.93]}>
            <mesh geometry={nodes.Object_37.geometry} material={materials['ambientCGMetal042A1K-JPG.001']} />
            <mesh geometry={nodes.Object_38.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
          <group position={[0, 10.09, 0]} scale={0.44}>
            <mesh geometry={nodes.Object_40.geometry} material={materials['ambientCGConcrete0402K-JPG']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/soton.gltf')