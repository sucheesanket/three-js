import React from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {Pane} from "tweakpane"
// console.log(OrbitControls);

const App = () => {
  // console.log(THREE);
  const pane=new Pane()

  const scene= new THREE.Scene()
  const geometry=new THREE.BoxGeometry(1,1,1)
  // const material=new THREE.MeshBasicMaterial({
  //   // color: 0x00ff00,
  //   // transparent:true,
  //   // opacity:0.5,
  //  })
  const torusKnotGeometry= new THREE.TorusKnotGeometry(0.5,0.15,100,16)
  const planeGeometry= new THREE.PlaneGeometry(1,1)
  const sphereGeometry=new THREE.SphereGeometry(0.5,32,32)
  const cylinderGeometry=new THREE.CylinderGeometry(0.5,0.5,1,32)

   //it can also be write as
  //  material.transparent=true
  //  material.opacity=0.5
  //  material.color=new THREE.Color(0x00ff00)
  //  material.side=THREE.DoubleSide
  const material= new THREE.MeshBasicMaterial()
  const cube=new THREE.Mesh(geometry,material)
  const knot=new THREE.Mesh(torusKnotGeometry,material)
  knot.position.x=1.5;
  const plane=new THREE.Mesh(planeGeometry,material)
  plane.position.x=-1.5
  const sphere=new THREE.Mesh()
  sphere.geometry=sphereGeometry
  sphere.material=material
  sphere.position.y=1.5

  const cylinder=new THREE.Mesh()
  cylinder.geometry=cylinderGeometry
  cylinder.material=material
  cylinder.position.y=-1.5

  material.side=THREE.DoubleSide
  scene.add(cube,knot,plane,sphere,cylinder)
  // scene.add(knot)
  // scene.add(plane)

  const light=new THREE.AmbientLight(0xffffff,0.4)
  scene.add(light)

  const pointLight=new THREE.PointLight(0xffffff,1.2)
  pointLight.position.set(5,5,5)
  scene.add(pointLight)

  //  const mesh=new THREE.Mesh(
  //   geometry,
  //   material
  //  )
  //  const mesh2=new THREE.Mesh(
  //   geometry,
  //   material
  //  )
  //  mesh2.position.x=1.5
  //  scene.add(mesh)
  //  scene.add(mesh2)
  //  const fog=new THREE.Fog(0xffffff,1,10)
  //  scene.fog=fog
  //  scene.background= new THREE.Color("limegreen")
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
// const vertices=new Float32Array([0,0,0,0,2,0,2,0,0]);
// const bufferAttribute=new THREE.BufferAttribute(vertices,3)
// const geometry=new THREE.BufferGeometry();
// geometry.setAttribute("position",bufferAttribute)
// const cubeMesh=new THREE.Mesh(geometry,cubeMaterial)
// scene.add(cubeMesh)
// console.log(scene);

// initialize the camera
// const camera = new THREE.PerspectiveCamera( 45(field of view), width / height, 1(near), 1000(far) );
// scene.add( camera );
// cubeMesh.position.x=1
// cubeMesh.position.y=1
// cubeMesh.position.x=1
// cubeMesh.position.z=1
// cubeMesh.scale.y=2
// cubeMesh.rotation.y= THREE.MathUtils.degToRad(90)
// const axesHelper=new THREE.AxesHelper(5)
// cubeMesh.add(axesHelper)

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth/ window.innerHeight ,
  0.1,
  200
)
camera.position.z=5
// const aspectratio=window.innerWidth/ window.innerHeight
// const camera= new THREE.OrthographicCamera(
//   -1 * aspectratio,
//   1 * aspectratio,
//   1,
//   -1,
//   0.1,
//   200

// )
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
  // cube.rotation.y+=0.01
  // knot.rotation.y+=0.01
  // sphere.rotation.x+=0.01
  // cylinder.rotation.x+=0.01
  // plane.rotation.y+=0.01
  scene.children.forEach((child)=>{
    if(child instanceof THREE.Mesh){
      child.rotation.y+=0.01
    }
  })
  // console.log(delta);
  // cubeMesh.rotation.y+=THREE.MathUtils.degToRad(1) * delta *10
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
