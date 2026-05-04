import React from 'react'
import * as THREE from "three"
const App = () => {
  // console.log(THREE);

  const scene= new THREE.Scene()
  const cubeGeometry=new THREE.BoxGeometry(1,1,1)
  const cubeMaterial=new THREE.MeshBasicMaterial({color:"red"})
  const cubeMesh=new THREE.Mesh(
    cubeGeometry,
    cubeMaterial,
  )
// console.log(cubeMesh);
scene.add(cubeMesh)
// console.log(scene);

// initialize the camera
// const camera = new THREE.PerspectiveCamera( 45(field of view), width / height, 1(near), 1000(far) );
// scene.add( camera );

const camera = new THREE.PerspectiveCamera(
  57,
  window.innerWidth/ window.innerHeight ,
  0.1,
  30
)
camera.position.z=5
// scene.add(camera)

const canvas=document.querySelector("canvas.threejs")
const renderer=new THREE.WebGLRenderer({canvas})
console.log(canvas);
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)


  
  return (
    <div>
      
      
    </div>
  )
}

export default App
