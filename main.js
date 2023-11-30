// MAIN - GAMING 2

import * as THREE from 'three';
import * as CANNON from "cannon-es";
import Player from './player.js';
import { acceleratedRaycast } from 'three-mesh-bvh'



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
world.gravity.set(0,-25,0);
world.broadphase = new CANNON.NaiveBroadphase();
// let phyMaterial = new CANNON.Material("slipperyMaterial");
// let phyContactMaterial = new CANNON.ContactMaterial(phyMaterial, phyMaterial, {friction: 0.0, restitution: 0.3});
// world.addContactMaterial(phyContactMaterial)
// world.defaultContactMaterial.friction = 0.05;
let solver = new CANNON.GSSolver();
solver.iterations = 7;
solver.tolerance = 0.1;
world.solver = new CANNON.SplitSolver(solver);
world.solver.iterations = 7;
// PLAYER
let l = [0,3,0]; // PLAYER SPAWN LOCATION
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true, linearDamping: 0.99 });
  let playerMaterial = new CANNON.Material("playerMaterial");
  playerMaterial.friction = 0.0;
  playerMaterial.restitution = 0;
  playerBody.material = playerMaterial;
  playerBody.position.set(l[0],l[1],l[2]);
  playerBody.collisionFilterGroup = 1;
  playerBody.collisionFilterMask = 1;
  playerBody.userData = {cc: "player", id: `${player.id}`}
  // playerBody.addEventListener("collide", playerCollision)
  player.set_body(playerBody);
  world.addBody(playerBody);
}


let playerCollision = (event) => {
  // if(event.body.userData.collisionClass == "floor") { isJumping=false }
  // else if(event.body.userData.collisionClass == "enemyProjectile" || event.target.userData.collisionClass == "enemyProjectile") {
  //   PLAYER.take_damage(event.body.userData.damage || event.target.userData.damage);
  // }
}

let playerGeometry = new THREE.BoxGeometry(2,4,2);
let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
playerMesh.userData.cc = "player"
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
    case " ":
      jump();
      break
    case "f":
      interact();
      break
    case "k":
      clearEnemies();
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
  if(!isAlreadyDead) {
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
    PLAYER.move_player(c_velocity);
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
  
    let playerGravity = new CANNON.Vec3(0, -500, 0);
    let gravityForce = new CANNON.Vec3();
    PLAYER.body.vectorToWorldFrame(playerGravity, gravityForce);
    PLAYER.body.applyForce(gravityForce, PLAYER.body.position);
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
    console.log("-- -- -- -- -- -- --\n");
}














THREE.Mesh.prototype.raycast = acceleratedRaycast;


// ____________________________________________________________________________________________________________________
// Everything above is the bare minimum for getting a 1x2x1 player with first person camera + mouse and keyboard inputs
// below is dedicated to a new game
// ====================================================================================================================

//  i#1 : dodge v parry v shoot
//      mid round bonus - winner gets first pick of 3 options
//      parry refelcts projectile 
//      perfect parry reflects projectile and adds damage and cannot be reflected except by perfect parry
//      dodge gives i-frames will dodge all parry projectiles
//      shoot fires a projectile from a small mag weapon - reloads will be often
//      
//      adjust keyboard and mouse inputs to allow for multiple inputs and reflect the actions available
//      1 weapon class that allows for upgrades/mods
//      make auto reflect ai
//      add menu ui that allows for options and matchmaking

//      bonus ideas: 
//            perfect parry turns dodge into damaging dash
//            +1 mag size - less reloading
//


// left click    : 0
// wheel         : 1
// right click   : 2
// back thumb    : 3
// front thumb   : 4
// new mouse handler
let mouse = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false
};
window.addEventListener("mousedown", (event) => {
  handleMouseDown(event.button);
})

// window.addEventListener("mouseup", (event) => {
//   mouse[event.button] = false; 
// })

let handleMouseDown = (button) => {
  if(!isAlreadyDead) {
    if(button == 2 && PLAYER.time_since_last_dodge + PLAYER.dodge_cooldown < Date.now()) {
      if(keys.W || keys.A || keys.S || keys.D) {
        // get direction

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
        // PLAYER.dodge(velocity);
        // console.log(PLAYER.body.position)
        PLAYER.dodge(velocity, checkForWall(PLAYER.body.position, velocity.normalize(), PLAYER.dodge_distance))
      } else {
        // default forward
        // get direction
        let velocity = new THREE.Vector3();
        let direction = new THREE.Vector3();
        direction.set(0, 0, -1);

        direction.normalize();
        const rotation = new THREE.Euler(0, camera.rotation.y, 0, "XYZ");
        velocity.copy(direction).applyEuler(rotation).multiplyScalar(PLAYER.acc);
        PLAYER.dodge(velocity, checkForWall(PLAYER.body.position, velocity.normalize(), PLAYER.dodge_distance))
        // PLAYER.time_since_last_dodge = Date.now();
        // PLAYER.dodge(velocity);
      }
      
    }
  }
}

let checkForWall = (start, direction, length) => {
  // console.log(scene.children)

  var rayGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(start.x, start.y, start.z),
    new THREE.Vector3((start.x + (direction.x*length)), start.y, (start.z + (direction.z * length)))
  ]);
  var rayMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  var rayVisual = new THREE.Line(rayGeometry, rayMaterial);
  scene.add(rayVisual);
  setTimeout(() => {scene.remove(rayVisual)}, 50)


  
  let raycast = new THREE.Raycaster(start, direction, 0, length);
  let intersections = raycast.intersectObjects(scene.children);
  if(intersections.length > 0) {
    for(let i = 0; i < intersections.length; i++) {
      if(intersections[i].object.type == "Mesh") {
        console.log("mesh hit", intersections[0].distance);
        return intersections[0].distance-1
      }
    }
    // intersections.forEach(child => {
    //   if(child.object.type == "Mesh") {
    //     console.log("mesh hit", child.distance);
    //     return child.distance-1
    //   }
    // })
  }
  return PLAYER.dodge_distance
  
}






let floorShape = new CANNON.Plane();
let floor = new CANNON.Body({ shape: floorShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
let floorBodyMaterial = new CANNON.Material("floorBodyMaterial");
floorBodyMaterial.friction = 0.4;
floorBodyMaterial.restitution = 0;
floor.material = floorBodyMaterial;
floor.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), -Math.PI/2)
floor.position.set(0,0,0);

world.addBody(floor);

const floorGeometry = new THREE.BoxGeometry(1000,1000,0,100,100);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.quaternion.copy(floor.quaternion);
floorMesh.position.copy(floor.position);
floorMesh.userData.cc = "floor"
scene.add(floorMesh);


let wallGeo = new THREE.BoxGeometry(10,10,1);
let wallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
let wall = new THREE.Mesh(wallGeo, wallMat);
wall.position.set(0, 5, -15);
wall.userData.cc = "wall"
scene.add(wall);

let wallShape = new CANNON.Box(new CANNON.Vec3(5,5,0.5));
let wallBody = new CANNON.Body({ shape: wallShape, mass: 0 });
wallBody.position.copy(wall.position);
world.addBody(wallBody)


let jump = () => {
  if(true) {
    // isJumping = true;
    // jumpStartTime = Date.now();
    PLAYER.body.velocity.y = (20 * PLAYER.jump_multiplier);
  }
}



let projectiles = [];

class TrainingBot {
  constructor(mesh, body) {
    this.mesh = mesh;
    this.body = body;
    this.fr = 2000;
    this.damage = 10;
    this.speed = 100;

    setInterval(() => {
      this.shootProjectile();
    }, this.fr)
  }

  shootProjectile () {
    console.log("FIRE!!")
    let pGeo = new THREE.SphereGeometry(0.5);
    let pMat = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
    let pMesh = new THREE.Mesh(pGeo, pMat);

    let pShape = new CANNON.Sphere(1);
    let pBody = new CANNON.Body({ shape: pShape, mass: 5, linearDamping: 0.2 });
    pBody.position.set(this.body.position.x, this.body.position.y+4, this.body.position.z)
    world.addBody(pBody);
    pMesh.position.copy(pBody.position);
    scene.add(pMesh);
    projectiles.push({mesh: pMesh, body: pBody, createdAt: Date.now(), deleteAfter: 3000});
    
    let direction = new CANNON.Vec3();
    let target = new CANNON.Vec3(camera.position.x, camera.position.y, camera.position.z)
    target.vsub(pBody.position, direction);
    direction.normalize();
    let initialVelocity = new CANNON.Vec3();
    direction.scale(this.speed, initialVelocity);
    
    // Set the initial velocity to the projectile's body
    pBody.velocity.copy(initialVelocity);
  }
}


let botGeo = new THREE.BoxGeometry(2,4,2);
let botMat = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
let botMesh = new THREE.Mesh(botGeo, botMat);

let botShape = new CANNON.Box(new CANNON.Vec3(1,2,1));
let botBody = new CANNON.Body({ shape:botShape, mass: 0, });

botBody.position.set(20,2,20);
botMesh.position.copy(botBody.position);
scene.add(botMesh);
world.addBody(botBody);

let bot = new TrainingBot(botMesh, botBody);





























let updateProjectiles = () => {
  if(projectiles.length > 0) {
    for(let i = 0; i < projectiles.length; i++) {
      projectiles[i].mesh.position.copy(projectiles[i].body.position);
      // console.log(projectiles[0].body.position)
      if(projectiles[i].createdAt + projectiles[i].deleteAfter < Date.now()) {
        scene.remove(projectiles[i].mesh);
        world.removeBody(projectiles[i].body);
        projectiles.splice(i, 1);
        i--;
      }
      
    }
  }
}





// Animate function
const animate = () => {

    let rate = 1/60;
    world.step(rate, rate, 10);
  
    playerInputs();
    updateGame();
    updateProjectiles();
  
    bodiesToRemove.forEach(removeBodies);
    meshToRemove.forEach(removeMesh);
      
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate()