// MAIN - GAMING 2

import * as THREE from 'three';
import * as CANNON from "cannon-es";
import Player from './player.js';



// Global Variables
let sensitivity = 0.0002;
let isJumping = false;
let isTakingDamage = false;
let isInventoryOpen = false;
let isAlreadyDead = false;
let worldBuildMode = false;
let bodiesToRemove = [];
let meshToRemove = [];

let PLAYER = new Player("steve");

let toggleCursorLock = (force=false) => {
  if(force) {
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
  } else {
    if(!isInventoryOpen && !isAlreadyDead) {
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      canvas.requestPointerLock();
    } else {
      document.exitPointerLock();
    }
  }
}




// THREE + Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2,5,0);
const renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.getContext().linewidth = 6;
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "canvas"
let canvas = document.getElementById("canvas");
// CANNON
let world = new CANNON.World();
world.quatNormalizeSkip = 0;
world.quatNormalizeFast = false;
world.defaultContactMaterial.contactEquationStiffness = 1e9;
world.defaultContactMaterial.contactEquationRelaxation = 4;
world.gravity.set(0,-10,0);
world.broadphase = new CANNON.NaiveBroadphase();
// let phyMaterial = new CANNON.Material("slipperyMaterial");
// let phyContactMaterial = new CANNON.ContactMaterial(phyMaterial, phyMaterial, 0.0, 0.3);
// world.addContactMaterial(phyContactMaterial)
// world.defaultContactMaterial.friction = 0.05;
let solver = new CANNON.GSSolver();
solver.iterations = 7;
solver.tolerance = 0.1;
world.solver = new CANNON.SplitSolver(solver);
world.solver.iterations = 7;
// PLAYER
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerMaterial = new CANNON.Material("playerMaterial");
  playerMaterial.friction = 0.0;
  playerMaterial.restitution = 0;
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.material = playerMaterial;
  let l = [0,2,0];
  playerBody.position.set(l[0],l[1],l[2]);
  playerBody.collisionFilterGroup = 1;
  playerBody.collisionFilterMask = 1;
  playerBody.userData = {collisionClass: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision)
  player.set_body(playerBody)
  world.addBody(playerBody);
}


let playerCollision = (event) => {
  if(event.body.userData.collisionClass == "floor") { isJumping=false }
  else if(event.body.userData.collisionClass == "enemyProjectile" || event.target.userData.collisionClass == "enemyProjectile") {
    PLAYER.take_damage(event.body.userData.damage || event.target.userData.damage);
  }
}

let playerGeometry = new THREE.BoxGeometry(2,4,2);
let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
scene.add(playerMesh);

create_player_body(PLAYER);

// Grab Pointer Lock on first click
canvas.onclick = (e) => {
  toggleCursorLock(true);
}

// KEYBOARD CONTROLS
const keyboardState = {};
document.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
});

let keys = {};
let onKeyDown = (event) => {
  switch (event.key) {
    case "w":
      keys.W = true;
      break;
    case "a":
      keys.A = true;
      break;
    case "s":
      keys.S = true;
      break;
    case "d":
      keys.D = true;
      break;
    case "r":
      reload(PLAYER);
      break
    case "i":
      toggle_inventory();
      break
    case "1":
      swap_weapons();
      break
    case "2":
      swap_weapons();
      break
    case " ":
      jump();
      break
    case "f":
      interact();
      break
    case "k":
      clearEnemies();
      break
    case "l":
      PLAYER.take_damage(75);
      updateHP(PLAYER);
      break
    case "p":
      printPlayerPosition();
      break
    case "o":
      override = !override;
      break
    case "j":
      toggleBuildMode();
      break

  }
}

let onKeyUp = (event) => {
  switch (event.key) {
    case "w":
      keys.W = false;
      break;
    case "a":
      keys.A = false;
      break;
    case "s":
      keys.S = false;
      break;
    case "d":
      keys.D = false;
      break;
  }
}

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

let playerInputs = () => {
  if(!isInventoryOpen && !isAlreadyDead) {
    let velocity = new THREE.Vector3();
    let direction = new THREE.Vector3();
    direction.set(0, 0, 0);

    if (keys.W) direction.z -= 1;
    if (keys.A) direction.x -= 1;
    if (keys.S) direction.z += 1;
    if (keys.D) direction.x += 1;

    direction.normalize();
    const rotation = new THREE.Euler(0, camera.rotation.y, 0, "XYZ");
    velocity.copy(direction).applyEuler(rotation).multiplyScalar(PLAYER.acc);
    let c_velocity = new CANNON.Vec3().copy(velocity);
    PLAYER.move_player(c_velocity)
  }
}

// MOUSE/CAMERA CONTROLS
const cameraRotation = new THREE.Euler(0, 0, 0, 'YXZ');
let mouseState = {
    x: 0,
    y: 0,
    down: false
};

document.addEventListener('mousemove', (event) => {
  if (!isInventoryOpen) { 
    cameraRotation.x -= event.movementY * sensitivity;
    cameraRotation.y -= event.movementX * sensitivity;
    cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));
    camera.rotation.copy(cameraRotation)
  }
  mouseState.x = event.movementX;
  mouseState.y = event.movementY;
});


let updateGame = () => {
    playerMesh.position.copy(PLAYER.body.position);
    playerMesh.quaternion.copy(PLAYER.body.quaternion);
  
    camera.position.copy(PLAYER.body.position);
    camera.position.y += worldBuildMode==true ? 42.5 : 2.5;
  
    // let playerGravity = new CANNON.Vec3(0, -500, 0);
    // let gravityForce = new CANNON.Vec3();
    // PLAYER.body.vectorToWorldFrame(playerGravity, gravityForce);
    // PLAYER.body.applyForce(gravityForce, PLAYER.body.position);
}

let removeBodies = (body, i) => {
    if(body) { 
        world.remove(body)
        bodiesToRemove.splice(i, 1);
    }
}
  
let removeMesh = (mesh, i) => {
    if(mesh) {
        scene.remove(mesh);
        shapesToRemove.splice(i, 1);
    }
}

let printPlayerPosition = () => {
    console.log("\nplayer's current location:");
    console.log(`x: ${PLAYER.body.position.x}`);
    console.log(`y: ${PLAYER.body.position.y}`);
    console.log(`z: ${PLAYER.body.position.z}`);
    console.log("-- -- -- -- -- -- --\n")
}
// ____________________________________________________________________________________________________________________
// Everything above is the bare minimum for getting a 1x2x1 player with first person camera + mouse and keyboard inputs
// below is dedicated to a new game
// ====================================================================================================================











// Animate function
const animate = () => {

    let rate = 1/60;
    world.step(rate, rate, 10);
  
    playerInputs();
    updateGame();

  
    bodiesToRemove.forEach(removeBodies);
    meshToRemove.forEach(removeMesh);
      
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate()