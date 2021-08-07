import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1 / 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


const geometry = new THREE.TorusGeometry(13, 3, 20, 100);
const material = new THREE.MeshStandardMaterial({
    color: 0xFF6347,
    // wireframe: true
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);


const pointLight = new THREE.PointLight(0xfffffff);
pointLight.position.set(20, 20, 40);


const ambientLight = new THREE.AmbientLight(0xfffffff);
scene.add(pointLight, ambientLight)


const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper)

scene.add(pointLight);


const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += .01;
    torus.rotation.y += .01;
    torus.rotation.z += .01;
    controls.update();
    renderer.render(scene, camera)
}

animate()