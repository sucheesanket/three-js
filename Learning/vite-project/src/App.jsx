import React from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
console.log(OrbitControls);

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
const aspectratio=window.innerWidth/ window.innerHeight
// const camera= new THREE.OrthographicCamera(
//   -1 * aspectratio,
//   1 * aspectratio,
//   1,
//   -1,
//   0.1,
//   200

// )
camera.position.z=5
// scene.add(camera)

const canvas=document.querySelector("canvas.threejs")
const renderer=new THREE.WebGLRenderer({
  canvas:canvas,
  antialias:true,

})
// console.log(canvas);
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
const controls= new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.autoRotate=true

window.addEventListener("resize",()=>{

  camera.aspect=window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth,window.innerHeight)
})


const renderloop =()=>{
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderloop)

}
renderloop()




  
  return (
    <div>
      
      
    </div>
  )
}

export default App
