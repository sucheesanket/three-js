import React from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
console.log(OrbitControls);

const App = () => {
  // console.log(THREE);

  const scene= new THREE.Scene()
  const cubeGeometry=new THREE.BoxGeometry(1,1,1)
  const cubeMaterial=new THREE.MeshBasicMaterial({color:"red",wireframe:true})
  // const cubeMesh=new THREE.Mesh(
  //   cubeGeometry,
  //   cubeMaterial,
  // )
  // const cubeMesh2=new THREE.Mesh(
  //   cubeGeometry,
  //   cubeMaterial,
  // )
  // cubeMesh2.position.x=2
  // const cubeMesh3=new THREE.Mesh(
  //   cubeGeometry,
  //   cubeMaterial,
  // )
  // cubeMesh3.position.x=-2

  // const group=new THREE.Group()
  // group.add(cubeMesh)
  // group.add(cubeMesh2)
  // group.add(cubeMesh3)
  // scene.add(group)
  // group.scale.x=2
// console.log(cubeMesh);
scene.add(cubeMesh)
// console.log(scene);

// initialize the camera
// const camera = new THREE.PerspectiveCamera( 45(field of view), width / height, 1(near), 1000(far) );
// scene.add( camera );
// cubeMesh.position.x=1
cubeMesh.position.y=1
// cubeMesh.position.x=1
// cubeMesh.position.z=1
// cubeMesh.scale.y=2
cubeMesh.rotation.y= THREE.MathUtils.degToRad(90)
const axesHelper=new THREE.AxesHelper(5)
// cubeMesh.add(axesHelper)

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
// controls.autoRotate=true

window.addEventListener("resize",()=>{

  camera.aspect=window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth,window.innerHeight)
})


const clock=new THREE.Clock()
let previousTime=0;

const renderloop =()=>{
  const currentTime=clock.getElapsedTime()
  const delta=currentTime-previousTime
  previousTime=currentTime
  // console.log(delta);
  cubeMesh.rotation.y+=THREE.MathUtils.degToRad(1) * delta *10
  // cubeMesh.position.x+=0.1* delta
  // cubeMesh.scale.x+=Math.sin(currentTime)
  // console.log();
  
  
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
