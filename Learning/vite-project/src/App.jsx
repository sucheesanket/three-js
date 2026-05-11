// import React from 'react'
// import * as THREE from "three"
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import {Pane} from "tweakpane"
// // console.log(OrbitControls);

// const App = () => {
//   // console.log(THREE);
//   const pane=new Pane()

//   const scene= new THREE.Scene()
//   const textureLoader=new THREE.TextureLoader();
//   const geometry=new THREE.BoxGeometry(1,1,1)
//   // const material=new THREE.MeshBasicMaterial({
//   //   // color: 0x00ff00,
//   //   // transparent:true,
//   //   // opacity:0.5,
//   //  })
//   const torusKnotGeometry= new THREE.TorusKnotGeometry(0.5,0.15,100,16)
//   const planeGeometry= new THREE.PlaneGeometry(1,1)
//   const sphereGeometry=new THREE.SphereGeometry(0.5,32,32)
//   const cylinderGeometry=new THREE.CylinderGeometry(0.5,0.5,1,32)

//   const textureTest=textureLoader.load('\Materials\space-cruiser-panels2-unity\space-cruiser-panels2_ao.png')
//    //it can also be write as
//   //  material.transparent=true
//   //  material.opacity=0.5
//   //  material.color=new THREE.Color(0x00ff00)
//   //  material.side=THREE.DoubleSide
//   const material= new THREE.MeshBasicMaterial()
//   material.map=textureTest
//   const cube=new THREE.Mesh(geometry,material)
//   const knot=new THREE.Mesh(torusKnotGeometry,material)
//   knot.position.x=1.5;
//   const plane=new THREE.Mesh(planeGeometry,material)
//   plane.position.x=-1.5
//   const sphere=new THREE.Mesh()
//   sphere.geometry=sphereGeometry
//   sphere.material=material
//   sphere.position.y=1.5

//   const cylinder=new THREE.Mesh()
//   cylinder.geometry=cylinderGeometry
//   cylinder.material=material
//   cylinder.position.y=-1.5

//   material.side=THREE.DoubleSide
//   scene.add(cube,knot,plane,sphere,cylinder)
//   // scene.add(knot)
//   // scene.add(plane)

//   const light=new THREE.AmbientLight(0xffffff,0.4)
//   scene.add(light)

//   const pointLight=new THREE.PointLight(0xffffff,1.2)
//   pointLight.position.set(5,5,5)
//   scene.add(pointLight)

//   //  const mesh=new THREE.Mesh(
//   //   geometry,
//   //   material
//   //  )
//   //  const mesh2=new THREE.Mesh(
//   //   geometry,
//   //   material
//   //  )
//   //  mesh2.position.x=1.5
//   //  scene.add(mesh)
//   //  scene.add(mesh2)
//   //  const fog=new THREE.Fog(0xffffff,1,10)
//   //  scene.fog=fog
//   //  scene.background= new THREE.Color("limegreen")
//   // const cubeMesh=new THREE.Mesh(
//   //   cubeGeometry,
//   //   cubeMaterial,
//   // )
//   // const cubeMesh2=new THREE.Mesh(
//   //   cubeGeometry,
//   //   cubeMaterial,
//   // )
//   // cubeMesh2.position.x=2
//   // const cubeMesh3=new THREE.Mesh(
//   //   cubeGeometry,
//   //   cubeMaterial,
//   // )
//   // cubeMesh3.position.x=-2

//   // const group=new THREE.Group()
//   // group.add(cubeMesh)
//   // group.add(cubeMesh2)
//   // group.add(cubeMesh3)
//   // scene.add(group)
//   // group.scale.x=2
// // console.log(cubeMesh);
// // const vertices=new Float32Array([0,0,0,0,2,0,2,0,0]);
// // const bufferAttribute=new THREE.BufferAttribute(vertices,3)
// // const geometry=new THREE.BufferGeometry();
// // geometry.setAttribute("position",bufferAttribute)
// // const cubeMesh=new THREE.Mesh(geometry,cubeMaterial)
// // scene.add(cubeMesh)
// // console.log(scene);

// // initialize the camera
// // const camera = new THREE.PerspectiveCamera( 45(field of view), width / height, 1(near), 1000(far) );
// // scene.add( camera );
// // cubeMesh.position.x=1
// // cubeMesh.position.y=1
// // cubeMesh.position.x=1
// // cubeMesh.position.z=1
// // cubeMesh.scale.y=2
// // cubeMesh.rotation.y= THREE.MathUtils.degToRad(90)
// // const axesHelper=new THREE.AxesHelper(5)
// // cubeMesh.add(axesHelper)



// // console.log(textureLoader);


// const camera = new THREE.PerspectiveCamera(
//   35,
//   window.innerWidth/ window.innerHeight ,
//   0.1,
//   200
// )
// camera.position.z=5
// // const aspectratio=window.innerWidth/ window.innerHeight
// // const camera= new THREE.OrthographicCamera(
// //   -1 * aspectratio,
// //   1 * aspectratio,
// //   1,
// //   -1,
// //   0.1,
// //   200

// // )
// // scene.add(camera)

// const canvas=document.querySelector("canvas.threejs")
// const renderer=new THREE.WebGLRenderer({
//   canvas:canvas,
//   antialias:true,

// })
// // console.log(canvas);
// renderer.setSize(window.innerWidth,window.innerHeight)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
// const controls= new OrbitControls(camera,canvas)
// controls.enableDamping=true
// // controls.autoRotate=true

// window.addEventListener("resize",()=>{

//   camera.aspect=window.innerWidth/window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth,window.innerHeight)
// })


// const clock=new THREE.Clock()
// let previousTime=0;

// const renderloop =()=>{
//   const currentTime=clock.getElapsedTime()
//   const delta=currentTime-previousTime
//   previousTime=currentTime
//   // cube.rotation.y+=0.01
//   // knot.rotation.y+=0.01
//   // sphere.rotation.x+=0.01
//   // cylinder.rotation.x+=0.01
//   // plane.rotation.y+=0.01
//   scene.children.forEach((child)=>{
//     if(child instanceof THREE.Mesh){
//       child.rotation.y+=0.01
//     }
//   })
//   // console.log(delta);
//   // cubeMesh.rotation.y+=THREE.MathUtils.degToRad(1) * delta *10
//   // cubeMesh.position.x+=0.1* delta
//   // cubeMesh.scale.x+=Math.sin(currentTime)
//   // console.log();
  
  
//   controls.update()
//   renderer.render(scene,camera)
//   window.requestAnimationFrame(renderloop)

// }
// renderloop()




  
//   return (
//     <div>
      
      
//     </div>
//   )
// }

// export default App

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { Pane } from "tweakpane";

const App=()=>{

  // initialize the pane
// const pane = new Pane();

// // initialize the scene
// const scene = new THREE.Scene();

// // initialize the loader 
// const textureLoader = new THREE.TextureLoader()

// // initialize the geometry
// const geometry = new THREE.SphereGeometry(1, 32, 32);
// const uv2Geometry = new THREE.BufferAttribute(geometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2Geometry)

// // load the grass textures
// const grassAlbedo = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_albedo.png')
// grassAlbedo.colorSpace = THREE.SRGBColorSpace
// const grassAo = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_ao.png')
// const grassHeight = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_height.png')
// const grassMetallic = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_metallic.psd')
// const grassNormal = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_normal-ogl.png')
// const grassRoughness = textureLoader.load('\Materials\whispy-grass-meadow-unity\wispy-grass-meadow_preview.jpg')

// // load the boulder textures
// const boulderAlbedo = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_albedo.png')
// boulderAlbedo.colorSpace = THREE.SRGBColorSpace
// const boulderAo = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_ao.png')
// const boulderHeight = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_height.png')
// const boulderMetallic = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_metallic.png')
// const boulderNormal = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_normal-ogl.png')
// const boulderRoughness = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_roughness.png')

// // load the space cruiser textures
// const spaceCruiserAlbedo = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png')
// spaceCruiserAlbedo.colorSpace = THREE.SRGBColorSpace
// const spaceCruiserAo = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png')
// const spaceCruiserHeight = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_height.png')
// const spaceCruiserMetallic = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_metallic.png')
// const spaceCruiserNormal = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_normal-ogl.png')
// const spaceCruiserRoughness = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png')

// // grass material
// const grassPane = pane.addFolder({
//   title: 'Grass Material',
//   expanded: true
// })

// const grassMaterial = new THREE.MeshStandardMaterial();
// grassMaterial.map = grassAlbedo
// grassMaterial.roughnessMap = grassRoughness
// grassMaterial.metalnessMap = grassMetallic
// grassMaterial.normalMap = grassNormal
// grassMaterial.displacementMap = grassHeight
// grassMaterial.displacementScale = 0.1
// grassMaterial.aoMap = grassAo

// grassPane.addBinding(grassMaterial, 'metalness', { min: 0, max: 1, step: 0.01 })
// grassPane.addBinding(grassMaterial, 'roughness', { min: 0, max: 1, step: 0.01 })
// grassPane.addBinding(grassMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 })
// grassPane.addBinding(grassMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 })

// // boulder material
// const boulderPane = pane.addFolder({
//   title: 'Boulder Material',
//   expanded: true
// })

// const boulderMaterial = new THREE.MeshStandardMaterial();
// boulderMaterial.map = boulderAlbedo
// boulderMaterial.roughnessMap = boulderRoughness
// boulderMaterial.metalnessMap = boulderMetallic
// boulderMaterial.normalMap = boulderNormal
// boulderMaterial.displacementMap = boulderHeight
// boulderMaterial.displacementScale = 0.1
// boulderMaterial.aoMap = boulderAo

// boulderPane.addBinding(boulderMaterial, 'metalness', { min: 0, max: 1, step: 0.01 })
// boulderPane.addBinding(boulderMaterial, 'roughness', { min: 0, max: 1, step: 0.01 })
// boulderPane.addBinding(boulderMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 })
// boulderPane.addBinding(boulderMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 })

// // space cruiser material
// const spaceCruiserPane = pane.addFolder({
//   title: 'Space Cruiser Material',
//   expanded: true
// })

// const spaceCruiserMaterial = new THREE.MeshStandardMaterial();
// spaceCruiserMaterial.map = spaceCruiserAlbedo
// spaceCruiserMaterial.roughnessMap = spaceCruiserRoughness
// spaceCruiserMaterial.metalnessMap = spaceCruiserMetallic
// spaceCruiserMaterial.normalMap = spaceCruiserNormal
// spaceCruiserMaterial.displacementMap = spaceCruiserHeight
// spaceCruiserMaterial.displacementScale = 0.1
// spaceCruiserMaterial.aoMap = spaceCruiserAo

// spaceCruiserPane.addBinding(spaceCruiserMaterial, 'metalness', { min: 0, max: 1, step: 0.01 })
// spaceCruiserPane.addBinding(spaceCruiserMaterial, 'roughness', { min: 0, max: 1, step: 0.01 })
// spaceCruiserPane.addBinding(spaceCruiserMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 })
// spaceCruiserPane.addBinding(spaceCruiserMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 })

// // intialize a group
// const group = new THREE.Group()

// // initialize the mesh

// const grass = new THREE.Mesh()
// grass.geometry = geometry
// grass.material = grassMaterial

// const boulder = new THREE.Mesh()
// boulder.geometry = geometry
// boulder.material = boulderMaterial
// boulder.position.x = 2.5

// const spaceCruiser = new THREE.Mesh()
// spaceCruiser.geometry = geometry
// spaceCruiser.material = spaceCruiserMaterial
// spaceCruiser.position.x = -2.5

// // add the mesh to the scene
// group.add(grass, boulder, spaceCruiser )
// scene.add(group);

// // initialize the light
// const light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// const pointLight = new THREE.PointLight(0xffffff, 200);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);

// // initialize the camera
// const camera = new THREE.PerspectiveCamera(
//   35,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   10000
// );
// camera.position.z = 10;
// camera.position.y = 5

// // initialize the renderer
// const canvas = document.querySelector("canvas.threejs");
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // instantiate the controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });


// // render the scene
// const renderloop = () => {
//   // group.children.forEach((child) =>{
//   //   if (child instanceof THREE.Mesh) {
//   //     child.rotation.y += 0.01
//   //   }
//   // })

//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(renderloop);
// };

// renderloop();
const pane = new Pane();
const scene = new THREE.Scene();
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.1,
});
const materialFolder = pane.addFolder({
  title: "Material",
  expanded: true,
});
materialFolder.addBinding(material, "metalness", { min: 0, max: 1, step: 0.01 });
materialFolder.addBinding(material, "roughness", { min: 0, max: 1, step: 0.01 });
materialFolder.addBinding(material, "color", { color: { type: "float" } });

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const sphereGeometry = new THREE.SphereGeometry(0.75, 8, 8);
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
const circleGeometry = new THREE.CircleGeometry(0.5, 32);

const box = new THREE.Mesh(boxGeometry, material);
box.position.x = -2;
const box2 = new THREE.Mesh(boxGeometry, material);
box2.position.x = -2;
box2.position.z = -2;
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 0;
sphere.castShadow = true;
const sphere2 = new THREE.Mesh(sphereGeometry, material);
sphere2.position.x = 0;
sphere2.position.z = -2;
const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
torusKnot.position.x = 2;
const torusKnot2 = new THREE.Mesh(torusKnotGeometry, material);
torusKnot2.position.x = 2;
torusKnot2.position.z = -2;
const circle = new THREE.Mesh(circleGeometry, material);
circle.scale.setScalar(20);
circle.position.y = -2;
circle.rotation.x = -Math.PI / 2;
circle.receiveShadow = true;

scene.add(box, sphere, torusKnot, circle);
scene.add(box2, sphere2, torusKnot2);

const ambientLight = new THREE.AmbientLight(new THREE.Color(0xc870ff), 0.2);
scene.add(ambientLight);
const ambientLightFolder = pane.addFolder({
  title: "Ambient Light",
  expanded: true,
});
ambientLightFolder.addBinding(ambientLight, "intensity", {
  min: 0,
  max: 1,
  step: 0.01,
});
ambientLightFolder.addBinding(ambientLight, "color", {
  color: { type: "float" },
});

const hemisphericLight = new THREE.HemisphereLight(
  new THREE.Color(0xff0000),
  new THREE.Color(0x0000ff),
  0.1
);
hemisphericLight.position.set(0, 10, 0);
scene.add(hemisphericLight);
const hemisphericLightHelper = new THREE.HemisphereLightHelper(
  hemisphericLight
);
scene.add(hemisphericLightHelper);
const hemisphericLightFolder = pane.addFolder({
  title: "Hemispheric Light",
  expanded: true,
});
hemisphericLightFolder.addBinding(hemisphericLight, "intensity", {
  min: 0,
  max: 1,
  step: 0.01,
});
hemisphericLightFolder.addBinding(hemisphericLight, "color", {
  color: { type: "float" },
});
hemisphericLightFolder.addBinding(hemisphericLight, "groundColor", {
  color: { type: "float" },
});

const directionalLight = new THREE.DirectionalLight(0x59ffe9, 0.2);
directionalLight.position.set(3, 10, 15);
scene.add(directionalLight);
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight
);
scene.add(directionalLightHelper);
const directionalLightFolder = pane.addFolder({
  title: "Directional Light",
  expanded: true,
});
directionalLightFolder.addBinding(directionalLight, "intensity", {
  min: 0,
  max: 1,
  step: 0.01,
});
directionalLightFolder.addBinding(directionalLight, "color", {
  color: {
    type: "float",
  },
});

const pointLight = new THREE.PointLight(0xff810a, 3);
pointLight.position.set(-3, 2, -3);
scene.add(pointLight);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);
const pointLightFolder = pane.addFolder({
  title: "Point Light",
  expanded: true,
});
pointLightFolder.addBinding(pointLight, "intensity", {
  min: 0,
  max: 5,
  step: 0.01,
});
pointLightFolder.addBinding(pointLight, "color", { color: { type: "float" } });

const rectAreaLight = new THREE.RectAreaLight(0xff0000, 0.5, 10, 10);
rectAreaLight.position.set(-10, 5, 5);
scene.add(rectAreaLight);
rectAreaLight.lookAt(0, 0, 0);
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
scene.add(rectAreaLightHelper);
const rectAreaLightFolder = pane.addFolder({
  title: "Rect Area Light",
  expanded: true,
});
rectAreaLightFolder.addBinding(rectAreaLight, "intensity", {
  min: 0,
  max: 1,
  step: 0.01,
});
rectAreaLightFolder.addBinding(rectAreaLight, "color", {
  color: { type: "float" },
});

const spotLight = new THREE.SpotLight(0x59ffe9, 0.5, 20, Math.PI * 0.1);
spotLight.position.set(10, 5, 5);
spotLight.target.position.set(0, -1, 0);
scene.add(spotLight);
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);
const spotLightFolder = pane.addFolder({ title: "Spot Light", expanded: true });
spotLightFolder.addBinding(spotLight, "intensity", {
  min: 0,
  max: 1,
  step: 0.01,
});
spotLightFolder.addBinding(spotLight, "color", { color: { type: "float" } });

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.z = 10;
camera.position.y = 5;

const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
 
  return (
    <div>
      
      
    </div>
  )





}
export default App

