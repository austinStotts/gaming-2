import * as THREE from "three";

// Set up scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a moving object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const movingObject = new THREE.Mesh(geometry, material);
scene.add(movingObject);

// Create particle geometry and material
const particleGeometry = new THREE.BufferGeometry();
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

// Set up particle positions (initially empty)
const particlePositions = new Float32Array(1000 * 3); // Adjust the number based on your needs
particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

// Create particle system
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Update function for animation
const update = () => {
    // Update particle positions based on the moving object's position
    movingObject.position.z -= 0.5;
    particlePositions.set(movingObject.position.toArray().map(val => val + Math.random() * 0.1 - 0.05));

    // Update other animation logic here

    renderer.render(scene, camera);
    requestAnimationFrame(update);
};

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Set initial camera position
camera.position.z = 5;

// Start animation loop
update();
