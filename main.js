// MAIN - GAMING 2

import * as THREE from 'three';
import * as CANNON from "cannon-es";
import 'js-circle-progress';
import Player from './helpers/player.js';
import { acceleratedRaycast } from 'three-mesh-bvh'

// import quarkScene from "./particle.js";
import * as THREEQUARKS from "three.quarks"

import createComplexPlayer from "./helpers/playermodel.js";
import arena1 from "./constructs/arena1.js"
import arena2 from "./constructs/arena2.js"

import ParticleSystem from './helpers/PS_lightning.js';


// Global Variables
let sensitivity = 0.0002;
let isJumping = false;
let isTakingDamage = false;
let isInventoryOpen = false;
let isAlreadyDead = false;
let worldBuildMode = false;
let bodiesToRemove = [];
let meshToRemove = [];

let allowMovement = true;
let allowCamera = true;

let onlinePlayerID;
let onlineRoomID;

let overridewindow = true;
let bots = false;


let defaultSettings = {
  "volume": "20",
  "sensitivity": "0.002",
  "showHitboxes": "true",
  "keybinds": {
    "forward": "w",
    "backward": "s",
    "left": "a",
    "right": "d",
    "jump": "Space",
    "shoot": "mb0",
    "dodge": "mb2",
    "parry": "e",
    "menu": "Tab"
  }
}

let currentSettings = {
  keybinds: {}
}
//   "volume": "20",
//   "sensitivity": "0.002",
//   "showHitboxes": "true",
//   "keybinds": {
//     "forward": "w",
//     "backward": "s",
//     "left": "a",
//     "right": "d",
//     "jump": " ",
//     "shoot": "mb0",
//     "dodge": "mb2",
//     "parry": "e",
//     "menu": "Tab"
//   }
// }










let PLAYER = new Player("steve");

let toggleCursorLock = (force=false) => {
  if(force) {
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
  } else {
    if(!isTabOpen) {
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      canvas.requestPointerLock();
    } else {
      document.exitPointerLock();
    }
  }
}




// THREE + Camera
const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2,5,0);

// inFrontOfCamera.position.z -= 2;

const renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance", antialias: true });
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
world.gravity.set(0,-20,0);
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
  let shape = new CANNON.Box(new CANNON.Vec3(1.25,3,1.25));
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true, linearDamping: 0.99 });
  let playerMaterial = new CANNON.Material("playerMaterial");
  playerMaterial.friction = 0.05;
  playerMaterial.restitution = 0.1;
  playerBody.material = playerMaterial;
  playerBody.position.set(l[0],l[1],l[2]);
  playerBody.collisionFilterGroup = 1;
  playerBody.collisionFilterMask = 1;
  playerBody.userData = {cc: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision);
  player.set_body(playerBody);
  world.addBody(playerBody);
}

let playerCollision = (event) => {
  if(event.body.userData.cc == "enemyProjectile") { 
    if(PLAYER.time_since_last_parry + PLAYER.perfect_parry_window > Date.now()) {
      // reflect projectile / must be perfect parry to reflect again
      reflectProjectile(event.body, true);
      PLAYER.power += 1;
      updateSuper();
    } else if(PLAYER.time_since_last_parry + PLAYER.parry_window > Date.now()) {
      // reflect projectile
      reflectProjectile(event.body, false);
    } else {
      let damage = document.getElementById("damage");
      damage.classList.add("damage");
      damage.hidden = false;
      setTimeout(() => {
        damage.classList.remove("damage");
        damage.hidden = true;
      }, 250);
      // take damage / delete projectile
    }
  } else if(event.body.userData.cc == "floor") {
    isJumping = false;
  } else if(event.body.userData.cc == "deathbox") {
    PLAYER.hp = 0;
    updateHP();
  }
}


let create_player = () => {
  let playerMesh = createComplexPlayer("steve", currentSettings.showHitboxes, true);
  playerMesh.userData.cc = "player"
  create_player_body(PLAYER);
  PLAYER.mesh = playerMesh;
  scene.add(PLAYER.mesh);
}




// Grab Pointer Lock on first click
document.getElementById("greyout").onclick = (e) => {
  toggleCursorLock(true);
}
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
  // console.log(event.key)
  switch (event.key) {
    case currentSettings.keybinds.forward:
      keys.W = true;
      break;
    case currentSettings.keybinds.left:
      keys.A = true;
      break;
    case currentSettings.keybinds.backward:
      keys.S = true;
      break;
    case currentSettings.keybinds.right:
      keys.D = true;
      break;
    case currentSettings.keybinds.reload:
      // reload(PLAYER);
      break
    case currentSettings.keybinds.jump:
      jump();
      break
    case "q":
      useSuper();
      break
    case "f":
      interact();
      break
    case "k":
      console.log(world.bodies)
      break
    case "p":
      printPlayerPosition();
      break
    case "o":
      override = !override;
      break
    case "j":
      worldBuildMode = !worldBuildMode;
      break
    case currentSettings.keybinds.parry:
      parry();
      break
    case currentSettings.keybinds.menu:
      toggleTab(event);
      break
    case "x": 
      animatePlayerX();
      break
    case "u":
      PLAYER.hp -= 1;
      updateHP();
      break
  }
}

let onKeyUp = (event) => {
  switch (event.key) {
    case currentSettings.keybinds.forward:
      keys.W = false;
      break;
    case currentSettings.keybinds.left:
      keys.A = false;
      break;
    case currentSettings.keybinds.backward:
      keys.S = false;
      break;
    case currentSettings.keybinds.right:
      keys.D = false;
      break;
  }
}





window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

let playerInputs = () => {
  if(allowMovement) {
    let velocity = new THREE.Vector3();
    let direction = new THREE.Vector3();
    direction.set(0, 0, 0);

    if (keys.W) direction.z -= 1;
    if (keys.A) direction.x -= 1;
    if (keys.S) direction.z += 1;
    if (keys.D) direction.x += 1;

    direction.normalize();
    const rotation = new THREE.Euler(0, camera.rotation.y, 0, "XYZ");
    velocity.copy(direction).applyEuler(rotation).multiplyScalar(PLAYER.speed);
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
    cameraRotation.x -= event.movementY * currentSettings.sensitivity;
    cameraRotation.y -= event.movementX * currentSettings.sensitivity;
    cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));
    camera.rotation.copy(cameraRotation);
    PLAYER.mesh.rotation.y = (camera.rotation.y)
    PLAYER.mesh.children[1].rotation.x = (camera.rotation.x)
  }
  mouseState.x = event.movementX;
  mouseState.y = event.movementY;
});


// console.log(PLAYER.mesh);



// !UPDATE GAME
let updateGame = () => {
  // move player mesh to player body
  PLAYER.mesh.position.copy(PLAYER.body.position);

  // keep camera in the right spot
  camera.position.copy(PLAYER.body.position);
  camera.position.y += worldBuildMode==true ? 10 : 2.5;

  // player extra gravity
  let tB = new CANNON.Body();
  tB.velocity.addScaledVector
  if(PLAYER.body.velocity.y < 0) {
    PLAYER.body.velocity.y -= 1.0;
  }

  // player arm movements - could be smoother when sitching from w > s or s > w
  if(keys.W) {
    PLAYER.mesh.children[2].rotation.x = degreeToPi(-(Math.abs(PLAYER.body.velocity.x) + Math.abs(PLAYER.body.velocity.z))*2);
    PLAYER.mesh.children[3].rotation.x = degreeToPi(-(Math.abs(PLAYER.body.velocity.x) + Math.abs(PLAYER.body.velocity.z))*2);
  } else if (keys.S) {
    PLAYER.mesh.children[2].rotation.x = degreeToPi((Math.abs(PLAYER.body.velocity.x) + Math.abs(PLAYER.body.velocity.z))*2);
    PLAYER.mesh.children[3].rotation.x = degreeToPi((Math.abs(PLAYER.body.velocity.x) + Math.abs(PLAYER.body.velocity.z))*2);
  } else {
    if(PLAYER.mesh.children[2].rotation.x > 0) { PLAYER.mesh.children[2].rotation.x -= 0.005 }
    if(PLAYER.mesh.children[3].rotation.x > 0) { PLAYER.mesh.children[3].rotation.x -= 0.005 }
    if(PLAYER.mesh.children[2].rotation.x < 0) { PLAYER.mesh.children[2].rotation.x += 0.005 }
    if(PLAYER.mesh.children[3].rotation.x < 0) { PLAYER.mesh.children[3].rotation.x += 0.005 }
  }
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


// a few weeks later!
// can make multiplayer rooms for many to join
// can shoot, dodge, and parry in realtime with other players
// can win!
// using a more complex player model with arem and leg movements
// this needs a lot more work but is way better than a cube
// need to work more on the gameplay loop
// and need a more interesting environment to play! 


// ----------------------------------------------------------------
// 1-12-24
// hello
// current state of the game:
// can join rooms with other players and play the game
// no game structure - just first to get a kill wins
// using v2 player models with rotation, head tild, and arm movements
// all player animations are send to other players in the room
// have an info page explaining basic mechanics and how to play

// need:
// more game structure
// like... pick a map and players and load into a map with all players
// have real win conditions and allow for dying and not ending the game
// keep working on player models and animations for all abilities
// players should see when counter is used or dash is used
// please fix the projectiles... they are inacurate and its somewhat random




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

let handleMouseDown = (button) => {
  if(!isAlreadyDead) {
    if(button == currentSettings.keybinds.dodge[2] && PLAYER.time_since_last_dodge + PLAYER.dodge_cooldown < Date.now()) {
      if(keys.W || keys.A || keys.S || keys.D) {

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
        PLAYER.dodge(velocity, checkForWall(PLAYER.body.position, velocity.normalize(), PLAYER.dodge_distance))
      } else {
        let velocity = new THREE.Vector3();
        let direction = new THREE.Vector3();
        direction.set(0, 0, -1);
        direction.normalize();
        const rotation = new THREE.Euler(0, camera.rotation.y, 0, "XYZ");
        velocity.copy(direction).applyEuler(rotation).multiplyScalar(PLAYER.acc);
        PLAYER.dodge(velocity, checkForWall(PLAYER.body.position, velocity.normalize(), PLAYER.dodge_distance))
      }
      
    } else if(button == currentSettings.keybinds.shoot[2] && PLAYER.time_since_last_shoot + PLAYER.shoot_cooldown < Date.now() && !isTabOpen) {
      let playerProjectile = PLAYER.createProjectile(camera);
      projectiles.push(playerProjectile);
      scene.add(playerProjectile.mesh);
      world.addBody(playerProjectile.body);
      PLAYER.time_since_last_shoot = Date.now();
    }
  }
}
// camera.getWorldDirection()
let checkForWall = (start, direction, length) => {

  var rayGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(start.x, start.y, start.z),
    new THREE.Vector3((start.x + (direction.x*length)), start.y, (start.z + (direction.z * length)))
  ]);
  var rayMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  var rayVisual = new THREE.Line(rayGeometry, rayMaterial);
  scene.add(rayVisual);
  setTimeout(() => {scene.remove(rayVisual)}, 50)


  
  // let raycast = new THREE.Raycaster(start, direction, 0, length);
  // let intersections = raycast.intersectObjects(scene.children);
  // if(intersections.length > 0) {
  //   for(let i = 0; i < intersections.length; i++) {
  //     if(intersections[i].object.type == "Mesh") {
  //       // console.log("mesh hit", intersections[0].distance);
  //       return intersections[0].distance-1
  //     }
  //   }
  // }
  return PLAYER.dodge_distance
}



// DEFAULT WORLD GEN
// FLAT FLOOR AND RUG

const floorTextureLoader = new THREE.TextureLoader();
const floorTexture = floorTextureLoader.load('https://sl-gaming.s3.amazonaws.com/pvpassets/floor.png');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;

const repeatXf = 500 
const repeatYf = 500; // Repeat 4 times along the y-axis
floorTexture.repeat.set(repeatXf, repeatYf);


let floorShape = new CANNON.Plane();
let floor = new CANNON.Body({ shape: floorShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
let floorBodyMaterial = new CANNON.Material("floorBodyMaterial");
floorBodyMaterial.friction = 0.05;
floorBodyMaterial.restitution = 0;
floor.material = floorBodyMaterial;
floor.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), -Math.PI/2)
floor.position.set(0,0,0);

world.addBody(floor);

const floorGeometry = new THREE.BoxGeometry(1000,1000,0,100,100);
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, wireframe: false });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.quaternion.copy(floor.quaternion);
floorMesh.position.copy(floor.position);
floorMesh.userData.cc = "floor";
floor.userData = {mesh: floorMesh, cc: "floor"}
scene.add(floorMesh);


let rug = new THREE.Mesh(new THREE.BoxGeometry(50,0.1,50), new THREE.MeshBasicMaterial({color: 0x9B5DFF}))
rug.position.set(0,0,0);
scene.add(rug)

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 













// ARENA CREATION
// SHOULD MOVE TO OWN FILE
// MAKE MORE CONSTRUCTS


let [arena, arenaBodies] = arena2();

arena.position.set(80, 20, 0);
scene.add(arena)
for(let i = 0; i < arena.children.length; i++) {
  let wp = new THREE.Vector3();
  arena.children[i].getWorldPosition(wp);
  arenaBodies[i].position.set(wp.x, wp.y, wp.z);
  arenaBodies[i].quaternion.copy(arena.children[i].quaternion)
  world.addBody(arenaBodies[i]);
}


// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 




















// for(let i = 0; i < 4; i++) {

//   let rampGeo = new THREE.BoxGeometry(10,10,1);
//   let rampMat = new THREE.MeshBasicMaterial({color: 0xFF1111});
//   let rampMesh = new THREE.Mesh(rampGeo, rampMat);
//   rampMesh.position.set(-10,2,10);
//   // rampMesh.rotateX(45+(90*i));
//   rampMesh.rotateY((90*i));
//   scene.add(rampMesh)

//   let rampShape = new CANNON.Box(new CANNON.Vec3(5,5,0.5))
//   let rampBody = new CANNON.Body({shape: rampShape, mass: 0})
//   rampBody.userData = {mesh: floorMesh, cc: "floor"}
//   rampBody.material = floorBodyMaterial;
//   rampBody.position.copy(rampMesh.position);
//   rampBody.quaternion.copy(rampMesh.quaternion);
//   world.addBody(rampBody)
// }








let jump = () => {
  if(!isJumping) {
    isJumping = true;
    PLAYER.body.velocity.y = (10 * PLAYER.jump_multiplier);
  }
}

 
let parryLevel = [0x2196F3,0x009688,0x8BC34A,0xFFEB3B,0xFF5722,0xEB144C];
let superLevel = [0x2196F3,0xFFEB3B,0xFF5722,0xEB144C,0x8E44AD, 0x000000];
let projectiles = [];


// TRAINING BOT
// CLASS AND CREATION

class TrainingBot {
  constructor(mesh, body) {
    this.mesh = mesh;
    this.body = body;
    this.fr = 2000;
    this.damage = 10;
    this.speed = 100;

    setInterval(() => {
      if(bots) {
        if(onlinePlayerID == undefined) {
          this.shootProjectile();
        }
      }
    }, this.fr)
  }

  shootProjectile () {
    let pGeo = new THREE.SphereGeometry(0.5);
    let pMat = new THREE.MeshBasicMaterial({ color: 0x2196F3 });
    let pMesh = new THREE.Mesh(pGeo, pMat);
    pMesh.userData.parryLevel = 0;

    let pShape = new CANNON.Sphere(1);
    let pBody = new CANNON.Body({ shape: pShape, mass: 1, linearDamping: 0.05 });
    pBody.position.set(this.body.position.x, this.body.position.y+4, this.body.position.z);
    world.addBody(pBody);
    pMesh.position.copy(pBody.position);
    scene.add(pMesh);
    if(onlinePlayerID != undefined) { // TURN OFF IF ONLINE
      projectiles.push({mesh: pMesh, body: pBody, deleteAfter: 3000, owner: "bot"});
    } else {
      projectiles.push({mesh: pMesh, body: pBody, deleteAfter: 3000, owner: null});
    }
    
    let direction = new CANNON.Vec3();
    let target = new CANNON.Vec3(camera.position.x, camera.position.y, camera.position.z)
    target.vsub(pBody.position, direction);
    direction.normalize();
    let initialVelocity = new CANNON.Vec3();
    direction.scale(this.speed, initialVelocity);

    pBody.userData = { mesh: pMesh, cc: "enemyProjectile", createdAt: Date.now() }
    pBody.velocity.copy(initialVelocity);

    pBody.addEventListener("collide", (e) => {
      // console.log(e);
      if(e.body.userData.cc == "onlineEnemyPlayer") { console.log("ENEMY PLAYER HIT") }
      e.body.userData.createdAt -= 1000;
      e.target.userData.createdAt -= 1000;
    })
  }
}


let botGeo = new THREE.BoxGeometry(2,4,2);
let botMat = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
let botMesh = new THREE.Mesh(botGeo, botMat);

let botShape = new CANNON.Box(new CANNON.Vec3(1,2,1));
let botBody = new CANNON.Body({ shape:botShape, mass: 0, });
botBody.userData = { cc: "enemy" }

botBody.position.set(20,2,20);
botMesh.position.copy(botBody.position);
scene.add(botMesh);
world.addBody(botBody);

let bot = new TrainingBot(botMesh, botBody);


// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 














// PARRY AND REFLECT PROJECTILES LOCAL

let parry = () => {
  if(PLAYER.time_since_last_parry + PLAYER.parry_cooldown < Date.now()) {
    PLAYER.time_since_last_parry = Date.now();
  }
}

let showWinner = (playerID) => {
  let w = document.getElementById("winner-banner");
  w.hidden = false;
  w.innerText = `PLAYER ${playerID} WINS`
  setTimeout(() => {
    w.hidden = true;
    w.innerText = ""
  }, 2900);
}

let headsup = document.getElementById("headsup");
let showParry = (perfect=false) => {
  if(perfect) {
    let e = document.createElement("div");
    e.innerText = "perfect!"
    headsup.appendChild(e);
    e.classList.add("grow", "perfect");
    setTimeout(() => {
      headsup.removeChild(e)
    }, 450);
  } else {
    let e = document.createElement("div");
    e.innerText = "parry!"
    headsup.appendChild(e);
    e.classList.add("grow", "parry");
    setTimeout(() => {
      headsup.removeChild(e)
    }, 450);
  }
}

let showHit = () => {
  let e = document.createElement("div");
  e.innerText = "hit!"
  headsup.appendChild(e);
  e.classList.add("grow", "hit");
  setTimeout(() => {
    headsup.removeChild(e)
  }, 450);
}

let showSuper = () => {
  let e = document.createElement("div");
  e.innerText = "super!"
  e.classList.add("grow", "supertext");
  headsup.appendChild(e);
  setTimeout(() => {
    headsup.removeChild(e)
  }, 450);
}

let showEnemyParry = () => {
  let e = document.createElement("div");
  e.innerText = "false hit!"
  headsup.appendChild(e);
  e.classList.add("grow", "enemyparry");
  setTimeout(() => {
    headsup.removeChild(e)
  }, 450);
}


let calculateVelocity = (pl) => {
  return (100 + (pl * 20))
}

let reflectProjectile = (projectile, perfect=false) => {
  if(perfect) {
    PLAYER.time_since_last_parry = 0;
    projectile.userData.createdAt = Date.now();
    let v = calculateVelocity(projectile.userData.mesh.userData.parryLevel);
    let direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    let np = new THREE.Vector3();
    PLAYER.mesh.children[1].children[0].getWorldPosition(np);
    projectile.position.set(np.x, np.y, np.z);
    projectile.velocity.set(direction.x * v, direction.y, direction.z * v);
    projectile.userData.mesh.userData.parryLevel += 1;
    projectile.userData.mesh.material.color.setHex(parryLevel[projectile.userData.mesh.userData.parryLevel]);
    showParry(true);
  } else {
    // PLAYER.time_since_last_parry = 0;
    projectile.userData.createdAt = Date.now();
    let direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    let np = new THREE.Vector3();
    PLAYER.mesh.children[1].children[0].getWorldPosition(np);
    projectile.position.set(np.x, np.y, np.z);
    projectile.velocity.set(direction.x *75, direction.y, direction.z *75);
    showParry(false);
  }
}

let resetRoom = (pps) => {
  document.getElementById("greyout").hidden = true;
  allowMovement = true;
  PLAYER.power = 0;
  PLAYER.hp = 10;
  updateHP();
  updateSuper();
  PLAYER.body.position.set(pps[onlinePlayerID][0],pps[onlinePlayerID][1],pps[onlinePlayerID][2]);
}


let checkForGameEnd = () => {
  if(inRoom) {
    // show win screen
    console.log(`player ${onlinePlayerID} loses`);
    socket.emit("checkforwinner", onlineRoomID);
  }
}

let defeat = () => {
  allowMovement = false;
  document.getElementById("greyout").hidden = false;
}


// UPDATE HP UI
let updateHP = (p="n/a") => {
  // document.getElementById("hp-label").textContent = PLAYER.hp;
  document.getElementById("hearts").innerText = ("❤️".repeat(PLAYER.hp));

  if(PLAYER.hp <= 0) {
    if(inRoom) { socket.emit("playerstatus", onlineRoomID, onlinePlayerID, "dead") }
    checkForGameEnd();
    defeat();
  }
}









// COOLDOWN UI MANAGER

let dcw = document.getElementById("dodge-cooldown-wrapper");
const dodge_cooldown = document.createElement('circle-progress');
dodge_cooldown.classList.add("dodge-circle")
dodge_cooldown.max = 100;
dodge_cooldown.value = 0;
dodge_cooldown.textFormat = (v) => {
  if(v == 100) { return "[RM]" }
  else { return ((PLAYER.dodge_cooldown/1000) - (v/100)*PLAYER.dodge_cooldown/1000).toFixed(1) + "s" }
};
dcw.appendChild(dodge_cooldown);

let pcw = document.getElementById("parry-cooldown-wrapper");
const parry_cooldown = document.createElement('circle-progress');
parry_cooldown.classList.add("parry-circle");
parry_cooldown.max = 100;
parry_cooldown.value = 0;
parry_cooldown.textFormat = (v) => {
  if(v == 100) { return "[E]" }
  else { return ((PLAYER.parry_cooldown/1000) - (v/100)*PLAYER.parry_cooldown/1000).toFixed(1) + "s" }
};
pcw.appendChild(parry_cooldown);

let rcw = document.getElementById("reload-cooldown-wrapper");
const reload_cooldown = document.createElement('circle-progress');
reload_cooldown.classList.add("reload-circle");
reload_cooldown.max = 100;
reload_cooldown.value = 0;
reload_cooldown.textFormat = (v) => {
  if(v == 100) { return "[LM]" }
  else { return ((PLAYER.shoot_cooldown/1000) - (v/100)*PLAYER.shoot_cooldown/1000).toFixed(1) + "s" }
};
rcw.appendChild(reload_cooldown);

// update cooldowns
setInterval(() => {
  let d_value = ((Date.now() - PLAYER.time_since_last_dodge) / PLAYER.dodge_cooldown) * 100;
  dodge_cooldown.value = d_value;
  
  let p_value = ((Date.now() - PLAYER.time_since_last_parry) / PLAYER.parry_cooldown) * 100;
  parry_cooldown.value = p_value;

  let r_value = ((Date.now() - PLAYER.time_since_last_shoot) / PLAYER.shoot_cooldown) * 100;
  reload_cooldown.value = r_value;
}, 50)

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 









// CLIENT PROJECTILES

let projectiledToRemove = [];

let updateProjectiles = () => {
  if(projectiles.length > 0) {
    for(let i = 0; i < projectiles.length; i++) {
      projectiles[i].mesh.position.copy(projectiles[i].body.position);
      if(projectiles[i].ps != undefined) {projectiles[i].ps.Step(0.01)}
      if(projectiles[i].body.userData.createdAt + projectiles[i].deleteAfter < Date.now()) {
        if(socket) { socket.emit("deleteprojectile", {pid: `p${onlinePlayerID}-${projectiles[i].mesh.uuid}`}, onlineRoomID) }
        scene.remove(projectiles[i].mesh);
        world.removeBody(projectiles[i].body);
        projectiles.splice(i, 1);
        i--;
      }
    }
  }
}

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 






// ONLINE PLAYERS

let sendHit = (player, pid) => {
  socket.emit("playerhit", onlineRoomID, onlinePlayerID, player, pid)
}

let onlinePlayers = {};

let makeOnlinePlayer = (playerID, data) => {
  let pMesh = createComplexPlayer(playerID, currentSettings.showHitboxes);
  pMesh.userData.playerID = playerID;

  let ps = new CANNON.Box(new CANNON.Vec3(1.25, 3, 1.25));
  let pBody = new CANNON.Body({ shape: ps, mass: 50 });
  pBody.userData = { cc: "onlineEnemyPlayer", playerID: playerID };
  pBody.addEventListener("collide", (e) => {
    if(e.body.userData.cc == "playerProjectile") { sendHit(e.target.userData.playerID, `p${onlinePlayerID}-${e.body.userData.mesh.uuid}`); e.body.userData.createdAt -= 3000; showHit()}
  })
  pMesh.position.set(data.position.x, data.position.y, data.position.z);
  pBody.position.copy(pMesh.position);
  // pMesh.quaternion.
  console.log(pMesh)
  scene.add(pMesh);
  world.addBody(pBody);
  onlinePlayers[playerID] = {playerID, mesh: pMesh, body: pBody};
}

let updateOnlinePlayers = (players) => {

  let pkeys = Object.keys(players);
  for(let i = 0; i < pkeys.length; i++) {
    if(onlinePlayers[pkeys[i]] != undefined) {
      if(pkeys[i] == onlinePlayerID) { 
        // skip if own player
      } else {
        console.log(players[pkeys[i]])
        onlinePlayers[pkeys[i]].mesh.position.set(players[pkeys[i]].data.position.x, players[pkeys[i]].data.position.y, players[pkeys[i]].data.position.z);
        onlinePlayers[pkeys[i]].mesh.quaternion.set(players[pkeys[i]].data.quaternion[0],players[pkeys[i]].data.quaternion[1],players[pkeys[i]].data.quaternion[2],players[pkeys[i]].data.quaternion[3]);
        onlinePlayers[pkeys[i]].mesh.children[1].quaternion.set(players[pkeys[i]].data.head_quaternion[0],players[pkeys[i]].data.head_quaternion[1],players[pkeys[i]].data.head_quaternion[2],players[pkeys[i]].data.head_quaternion[3]);
        onlinePlayers[pkeys[i]].body.position.set(players[pkeys[i]].data.position.x, players[pkeys[i]].data.position.y, players[pkeys[i]].data.position.z);
      
        // online arm/leg movements
        onlinePlayers[pkeys[i]].mesh.children[2].quaternion.set(players[pkeys[i]].data.left_arm_quaternion[0],players[pkeys[i]].data.left_arm_quaternion[1],players[pkeys[i]].data.left_arm_quaternion[2],players[pkeys[i]].data.left_arm_quaternion[3]);
        onlinePlayers[pkeys[i]].mesh.children[3].quaternion.set(players[pkeys[i]].data.right_arm_quaternion[0],players[pkeys[i]].data.right_arm_quaternion[1],players[pkeys[i]].data.right_arm_quaternion[2],players[pkeys[i]].data.right_arm_quaternion[3]);
        onlinePlayers[pkeys[i]].mesh.children[4].quaternion.set(players[pkeys[i]].data.left_leg_quaternion[0],players[pkeys[i]].data.left_leg_quaternion[1],players[pkeys[i]].data.left_leg_quaternion[2],players[pkeys[i]].data.left_leg_quaternion[3]);
        onlinePlayers[pkeys[i]].mesh.children[5].quaternion.set(players[pkeys[i]].data.right_leg_quaternion[0],players[pkeys[i]].data.right_leg_quaternion[1],players[pkeys[i]].data.right_leg_quaternion[2],players[pkeys[i]].data.right_leg_quaternion[3]);
        // if(onlinePlayers[pkeys[i]].body.velocity.x + onlinePlayers[pkeys[i]].body.velocity.z > 0) {
        //   let r = 0.1 * Math.sin((2*Math.PI) * 2 * (Date.now()/1000) + 1);
        //   let t = 0.1 * Math.sin((2*Math.PI) * 2 * (Date.now()/800) + 1);
        //   onlinePlayers[pkeys[i]].mesh.children[2].rotateOnAxis(new THREE.Vector3(1,0,0), r);
        //   onlinePlayers[pkeys[i]].mesh.children[3].rotateOnAxis(new THREE.Vector3(-1,0,0), r);
        //   onlinePlayers[pkeys[i]].mesh.children[4].rotateOnAxis(new THREE.Vector3(-1,0,0), t);
        //   onlinePlayers[pkeys[i]].mesh.children[5].rotateOnAxis(new THREE.Vector3(1,0,0), t);
        // }
      }
    } else {
      if(pkeys[i] == onlinePlayerID) { 
        // skip if own player
      } else {
        makeOnlinePlayer(pkeys[i], players[pkeys[i]].data);
      }
    }
  }
}

let removeAllOnlinePlayers = () => {
  Object.keys(onlinePlayers).forEach(player => {
    scene.remove(onlinePlayers[player].mesh);
    world.removeBody(onlinePlayers[player].body);
  })
  onlinePlayers = {};
}

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 













// ONLINE PROJECTILES

let currentRoomProjectiles = {}

let makeRoomProjectile = (p, pid, pl, owner) => {
  let pg = new THREE.SphereGeometry(0.5);
  let pm = new THREE.MeshBasicMaterial({ color: parryLevel[pl] })
  let pMesh = new THREE.Mesh(pg,pm);
  pMesh.position.set(p.x,p.y,p.z);
  pMesh.userData.pid = pid;
  pMesh.userData.parryLevel = pl;
  pMesh.userData.owner = owner;
  scene.add(pMesh);
  return pMesh;
}

let makeSuper = (p, pid, pl, owner) => {
  let pg = new THREE.SphereGeometry(2);
  let pm = new THREE.MeshBasicMaterial({ color: superLevel[pl] })
  let pMesh = new THREE.Mesh(pg,pm);
  pMesh.position.set(p.x,p.y,p.z);
  pMesh.userData.pid = pid;
  pMesh.userData.parryLevel = pl;
  pMesh.userData.owner = owner;
  scene.add(pMesh);
  return pMesh;
}

let updateRoomProjectiles = (rps) => {
  let keys = Object.keys(rps);
  for(let i = 0; i < keys.length; i++) { // if projectile exists
    if(rps[keys[i]].owner != onlinePlayerID) { // skip if own projectile
      if(currentRoomProjectiles[rps[keys[i]].pid] != undefined) {
        currentRoomProjectiles[rps[keys[i]].pid].mesh.position.set(rps[keys[i]].position.x,rps[keys[i]].position.y,rps[keys[i]].position.z)
      } else { // if new projectile
        console.log("NEW PROJECTILE: ",rps[keys[i]])
        if(rps[keys[i]].isSuper) {
          currentRoomProjectiles[rps[keys[i]].pid] = {mesh: makeSuper(rps[keys[i]].position, rps[keys[i]].pid, rps[keys[i]].parryLevel, rps[keys[i]].owner)}
        } else {
          currentRoomProjectiles[rps[keys[i]].pid] = {mesh: makeRoomProjectile(rps[keys[i]].position, rps[keys[i]].pid, rps[keys[i]].parryLevel, rps[keys[i]].owner)}
        }
      }
    }
  }
  Object.keys(currentRoomProjectiles).forEach(pid => { if(rps[pid] == undefined) {scene.remove(currentRoomProjectiles[pid].mesh); delete currentRoomProjectiles[pid]; } })
}

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 















// MENU - UI - INPUT METHODS

document.getElementById("tab-close-button").addEventListener("click", (e) => { toggleTab(e) })
let isTabOpen = false;
let tabMenu = document.getElementById("tab-menu");
let toggleTab = (event) => {
  event.preventDefault();
  if(!isTabOpen) {
    tabMenu.showModal();
    isTabOpen = true;
    toggleCursorLock();
    tabMenu.focus();
  } else {
    tabMenu.close();
    isTabOpen = false;
    if(isSettingsOpen) { document.getElementById("settings-menu").close(); isSettingsOpen = false; }
    if(isLoginOpen) { document.getElementById("login-dialog").close(); isLoginOpen = false; }
    if(isOnlineOpen) { document.getElementById("online-dialog").close(); isOnlineOpen = false; }
    if(isKeybindsOpen) { document.getElementById("keybinds-menu").close(); isKeybindsOpen = false; }
    savePlayerSettings();
    toggleCursorLock();
  }
}

document.getElementById("settings-button").addEventListener("click", (e) => { toggleSettings() })
document.getElementById("settings-close-button").addEventListener("click", (e) => { toggleSettings(); savePlayerSettings(); })
let isSettingsOpen = false;
let settings = document.getElementById("settings-menu");
let toggleSettings = () => {
  if(!isSettingsOpen) {
    settings.showModal();
    isSettingsOpen = true;
    // toggleCursorLock();
    settings.focus();
  } else {
    settings.close();
    isSettingsOpen = false;
    // toggleCursorLock();
  }
}

document.getElementById("keybinds-button").addEventListener("click", (e) => { toggleKeybinds() })
document.getElementById("keybinds-close-button").addEventListener("click", (e) => { toggleKeybinds(); savePlayerSettings(); })
let isKeybindsOpen = false;
let keybinds = document.getElementById("keybinds-menu");
let toggleKeybinds = () => {
  if(!isKeybindsOpen) {
    keybinds.showModal();
    isKeybindsOpen = true;
    keybinds.focus();
  } else {
    keybinds.close();
    isKeybindsOpen = false;
  }
}

let handleKeybindInput = (e) => {
  if(e.key != undefined) {
    e.preventDefault();
    e.target.value = e.key;
    console.log(e.key)
  } else {
    e.target.value = `mb${e.button}`;
  }
}

// keys
document.getElementById("key-forward-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-backward-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-left-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-right-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-jump-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-shoot-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-dodge-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-parry-value").addEventListener("keydown", handleKeybindInput)

// mouse
document.getElementById("key-forward-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-backward-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-left-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-right-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-jump-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-shoot-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-dodge-value").addEventListener("mousedown", handleKeybindInput)
document.getElementById("key-parry-value").addEventListener("mousedown", handleKeybindInput)

let savePlayerSettings = () => {
  currentSettings.volume = document.getElementById("volume-value").value == "Space" ? " " : document.getElementById("volume-value").value
  currentSettings.sensitivity = document.getElementById("sensitivity-value").value == "Space" ? " " : document.getElementById("sensitivity-value").value
  currentSettings.showHitboxes = document.getElementById("hitbox-value").checked;
  currentSettings.keybinds.forward = document.getElementById("key-forward-value").value == "Space" ? " " : document.getElementById("key-forward-value").value
  currentSettings.keybinds.backward = document.getElementById("key-backward-value").value == "Space" ? " " : document.getElementById("key-backward-value").value
  currentSettings.keybinds.left = document.getElementById("key-left-value").value == "Space" ? " " : document.getElementById("key-left-value").value
  currentSettings.keybinds.right = document.getElementById("key-right-value").value == "Space" ? " " : document.getElementById("key-right-value").value
  currentSettings.keybinds.jump = document.getElementById("key-jump-value").value == "Space" ? " " : document.getElementById("key-jump-value").value
  currentSettings.keybinds.shoot = document.getElementById("key-shoot-value").value == "Space" ? " " : document.getElementById("key-shoot-value").value
  currentSettings.keybinds.dodge = document.getElementById("key-dodge-value").value == "Space" ? " " : document.getElementById("key-dodge-value").value
  currentSettings.keybinds.parry = document.getElementById("key-parry-value").value == "Space" ? " " : document.getElementById("key-parry-value").value
  currentSettings.keybinds.menu = document.getElementById("key-menu-value").value == "Space" ? " " : document.getElementById("key-menu-value").value

  window.localStorage.setItem("playersettings", JSON.stringify(currentSettings))
}

let getPlayerSettings = () => {
  let settingsString = window.localStorage.getItem("playersettings");
  if(settingsString != undefined) {
    // set html elements to these values
    let settingObj = JSON.parse(settingsString);
    document.getElementById("volume-value").value = settingObj.volume;
    document.getElementById("sensitivity-value").value = settingObj.sensitivity;
    document.getElementById("hitbox-value").checked = settingObj.showHitboxes;
    document.getElementById("key-forward-value").value = settingObj.keybinds.forward == " " ? "Space" : settingObj.keybinds.forward;
    document.getElementById("key-backward-value").value = settingObj.keybinds.backward == " " ? "Space" : settingObj.keybinds.backward;
    document.getElementById("key-left-value").value = settingObj.keybinds.left == " " ? "Space" : settingObj.keybinds.left;
    document.getElementById("key-right-value").value = settingObj.keybinds.right == " " ? "Space" : settingObj.keybinds.right;
    document.getElementById("key-jump-value").value = settingObj.keybinds.jump == " " ? "Space" : settingObj.keybinds.jump;
    document.getElementById("key-shoot-value").value = settingObj.keybinds.shoot == " " ? "Space" : settingObj.keybinds.shoot;
    document.getElementById("key-dodge-value").value = settingObj.keybinds.dodge == " " ? "Space" : settingObj.keybinds.dodge;
    document.getElementById("key-parry-value").value = settingObj.keybinds.parry == " " ? "Space" : settingObj.keybinds.parry;
    document.getElementById("key-menu-value").value = settingObj.keybinds.menu == " " ? "Space" : settingObj.keybinds.menu;
  } else {
    window.localStorage.setItem("playersettings", JSON.stringify(defaultSettings));
  }
}

getPlayerSettings();



// END OF MENU/INPUT METHODS 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 





















// SOCKET METHODS
// ONLINE AND ROOM METHODS

import axios from "axios";
import io from "socket.io-client";


let ld = document.getElementById("login-dialog");
let od = document.getElementById("online-dialog");

let c = document.getElementById("connect");
let d = document.getElementById("disconnect");
let mr = document.getElementById("makeroom");
let ridl = document.getElementById("roomid-label");
let rid = document.getElementById("roomid");
let jr = document.getElementById("joinroom");
let lr = document.getElementById("leaveroom");
let re = document.getElementById("room-errors");

rid.addEventListener("keydown", (e) => { if(e.key == "Enter") { jr.click() }})

ridl.addEventListener("click", () => {
    navigator.clipboard.writeText(onlineRoomID)
});

let socket;
let inRoom = false;
let isLoginOpen = false;
let isOnlineOpen = false;

document.getElementById("login-close-button").addEventListener("click", (e) => {
    if(isLoginOpen) {
        isLoginOpen = false;
        ld.close();
    }
})

document.getElementById("online-close-button").addEventListener("click", (e) => {
    if(isOnlineOpen) {
        isOnlineOpen = false;
        od.close();
    }
})

document.getElementById("login").addEventListener("click", (event) => {
    axios.post("http://localhost:4000/login?username=steve&password=12345")
    .then(response => { console.log(response); r.textContent = response.data })
    .catch(error => { console.log(error) });
})

document.getElementById("signup").addEventListener("click", (event) => {
    axios.post("http://localhost:4000/signup?username=steve&password=12345")
    .then(response => { console.log(response); r.textContent = response.data })
    .catch(error => { console.log(error) });
})


// this is a mess...

document.getElementById("connect").addEventListener("click", (event) => {
    socket = io("http://34.239.48.37/");
    // socket = io("http://localhost:4001");
    socket.on("roomid", (id, playerID) => {
      console.log(socket);
      onlinePlayerID = playerID;
      re.textContent = "";
      inRoom = true;
      ridl.textContent = id;
      onlineRoomID = id;
      lr.classList.remove("unclickable");
      jr.classList.add("unclickable");
    });
    socket.on("roomjoinfail", (id) => { re.textContent = `failed to join room: ${id}` });
    socket.on("leaveroom", () => {
        ridl.textContent = "00000";
        inRoom = false;
        onlinePlayerID = undefined;
    })
    socket.on("allpositions", (players) => { updateOnlinePlayers(players); })
    socket.on("roomprojectiles", rps => { updateRoomProjectiles(rps) })
    socket.on("takehit", (playerID, pid) => { if(playerID == onlinePlayerID) { onlinePlayerCollision(pid); } })
    socket.on("reset", (pps) => { resetRoom(pps) })
    socket.on("winner", (playerID) => { showWinner(playerID) })
    socket.on("removeplayer", (playerID) => { console.log("REMOVING PLAYER", playerID); scene.remove(onlinePlayers[playerID].mesh); world.removeBody(onlinePlayers[playerID].body); delete onlinePlayers[playerID]})
    socket.on("parry", (playerID) => { console.log("THE ENEMY HAS PARRIED", playerID); if(playerID == onlinePlayerID) { showEnemyParry() }})
  })  

window.onclose = () => {
  socket.emit("playerdisconnect", ridl.innerText, onlinePlayerID);
}

document.getElementById("disconnect").addEventListener("click", (event) => {
    socket.emit("playerdisconnect", ridl.innerText, onlinePlayerID);
    socket.close();
})

document.getElementById("makeroom").addEventListener("click", (event) => {
    socket.emit("makeroom", {maxPlayers: 4, map: "arena2"});
})

document.getElementById("joinroom").addEventListener("click", (event) => {
    let roomid = document.getElementById("roomid").value;
    console.log(roomid);
    socket.emit("joinroom", roomid);
})

document.getElementById("leaveroom").addEventListener("click", (event) => {
  if(Object.keys(onlinePlayers).length > 0) {
    removeAllOnlinePlayers();
  }
  if(socket) {
      socket.emit("leaveroom", onlineRoomID, onlinePlayerID);
  }
})

let ldC = document.getElementById("ld-connected");
let ldP = document.getElementById("ld-playernumber");
let ldFPS = document.getElementById("ld-fps");
let ldPing = document.getElementById("ld-ping");

setInterval(() => {
    if(socket) {
        if(socket.connected) {
          const startms = Date.now();
          socket.volatile.emit("ping", () => {
            const latency = Date.now() - startms;
            ldPing.innerText = `ping: ${latency}ms`
          });
            ldC.innerText = "connected: true";
            ldC.classList.remove("ld-false");
            ldC.classList.add("ld-true");
            ldP.innerText = `player number: ${onlinePlayerID}`;
            document.getElementById("connect").classList.add("connection-valid");
            d.classList.remove("unclickable");

            if(!inRoom) {
                [mr, jr].forEach(e => { e.classList.remove("unclickable") });
                rid.classList.remove("no-input");
                lr.classList.add("unclickable");
            } else {
                [mr, jr].forEach(e => { e.classList.add("unclickable") });
                rid.classList.add("no-input");
                lr.classList.remove("unclickable");
            }
        } else {
          ldC.innerText = "connected: false";
          ldC.classList.remove("ld-true");
          ldC.classList.add("ld-false");
          ldP.innerText = `player number: n/a`;
          document.getElementById("connect").classList.remove("connection-valid");
          [d, mr, jr, lr].forEach(e => {e.classList.add("unclickable")});
          rid.classList.add("no-input");
        }          
    }
}, 500);

document.getElementById("login-button").addEventListener("click", (e) => {
  if(!isLoginOpen) {
    isLoginOpen = true;
    ld.showModal();
  }
})

document.getElementById("online-button").addEventListener("click", (e) => {
  if(!isOnlineOpen) {
    isOnlineOpen = true;
    od.showModal();
  }
})

// END OF SOCKET METHODS
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 
// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ 












// ONLINE PLAYER COLLISION
let onlinePlayerCollision = (pid) => {
  socket.emit("deleteprojectile", pid, ridl.innerText);
  // perfect parry
  if(PLAYER.time_since_last_parry + PLAYER.perfect_parry_window > Date.now()) {
    socket.emit("parry", onlineRoomID, currentRoomProjectiles[pid].mesh.userData.owner);
    let p = PLAYER.createProjectile(camera, currentRoomProjectiles[pid].mesh.userData.parryLevel+1);
    scene.add(p.mesh);
    world.addBody(p.body);
    projectiles.push(p);
    PLAYER.power += 1;
    updateSuper();
  }
  // regular parry
  else if(PLAYER.time_since_last_parry + PLAYER.parry_window > Date.now()) {
    let p = PLAYER.createProjectile(camera, currentRoomProjectiles[pid].mesh.userData.parryLevel);
    scene.add(p.mesh);
    world.addBody(p.body);
    projectiles.push(p);
  }
  // player was hit
  else {
    PLAYER.hp -= Number(currentRoomProjectiles[pid].mesh.userData.parryLevel) +1;
    updateHP(currentRoomProjectiles[pid].mesh.userData.owner);
    let damage = document.getElementById("damage");
    damage.classList.add("damage");
    damage.hidden = false;
    setTimeout(() => {
      damage.classList.remove("damage");
      damage.hidden = true;
    }, 250);
  }
}








let sendPlayerPositions = () => {
  if(onlinePlayerID != undefined) {
    socket.emit("playerposition", ridl.innerText, onlinePlayerID, getPlayerData(PLAYER))
  }
}

let sendProjectilePositions = () => {
  if(onlinePlayerID != undefined) {
    let projectilesToEmit = [];
    projectiles.forEach(p => {
      projectilesToEmit.push({position: p.body.position, pid: `p${onlinePlayerID}-${p.mesh.uuid}`, owner: onlinePlayerID, parryLevel: p.mesh.userData.parryLevel, isSuper: p.isSuper})
    })
    socket.emit("projectiles", projectilesToEmit, onlinePlayerID, onlineRoomID)
  }
}













// UPDATE SUPER
let superWrapper = document.getElementById("super-wrapper");
let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");

let updateSuper = () => {
  if(PLAYER.power >= 4) {
    cell1.classList.remove("hidden");
    cell2.classList.remove("hidden");
    cell3.classList.remove("hidden");
    cell4.classList.remove("hidden");
    superWrapper.classList.remove("not-full");
    superWrapper.classList.add("full");
  } else if(PLAYER.power == 3) {
    cell1.classList.remove("hidden");
    cell2.classList.remove("hidden");
    cell3.classList.remove("hidden");

    cell4.classList.add("hidden");
    
    superWrapper.classList.remove("full");
    superWrapper.classList.add("not-full");
  } else if(PLAYER.power == 2) {
    cell1.classList.remove("hidden");
    cell2.classList.remove("hidden");
    
    cell3.classList.add("hidden");
    cell4.classList.add("hidden");
    
    superWrapper.classList.remove("full");
    superWrapper.classList.add("not-full");
  } else if(PLAYER.power == 1) {
    cell1.classList.remove("hidden");
    
    cell2.classList.add("hidden");
    cell3.classList.add("hidden");
    cell4.classList.add("hidden");
    
    superWrapper.classList.remove("full");
    superWrapper.classList.add("not-full");
  } else {

    cell1.classList.add("hidden");
    cell2.classList.add("hidden");
    cell3.classList.add("hidden");
    cell4.classList.add("hidden");
    
    superWrapper.classList.remove("full");
    superWrapper.classList.add("not-full");
  }
}

updateSuper();



let useSuper = () => {
  if(PLAYER.power >= 4) {
    showSuper();
    let playerSuper = PLAYER.createSuper(camera);
    projectiles.push(playerSuper);
    scene.add(playerSuper.mesh);
    world.addBody(playerSuper.body);
    PLAYER.power = 0;
    updateSuper();
    // PLAYER.time_since_last_shoot = Date.now();
  }
}








let fc = (v) => {
  if (v>0) { return 1 }
  else { return -1 }
}



setInterval(() => {
  // onlinePlayers.forEach(player => { console.log(player) })
  // console.log("other players in room:", Object.keys(onlinePlayers).length);
  // console.log("online_player_id:", onlinePlayerID);
  // console.log("room_id:", ridl.innerText)
  // console.log(renderer)
  // console.log("\nPLAYER VELOCITY:\n", "x:", PLAYER.body.velocity.x.toFixed(1), "y:", PLAYER.body.velocity.y.toFixed(1), "z:", PLAYER.body.velocity.z.toFixed(1))

  // let test = new CANNON.Body({});
  // test.v

  // let v = new CANNON.Vec3(PLAYER.body.x,PLAYER.body.y,PLAYER.body.z);
  // let lv = PLAYER.body.vectorToLocalFrame(v);

  // let lv = PLAYER.body.vectorToWorldFrame(PLAYER.body.velocity)


  // let d = new THREE.Mesh();
  // let localVelocity = PLAYER.mesh.worldToLocal(new THREE.Vector3(PLAYER.body.velocity.x,PLAYER.body.velocity.y,PLAYER.body.velocity.z))
  // localVelocity.normalize();
  // camera.getWorldDirection(d);
  // new THREE.Mesh().rotateOnWorldAxis(PLAYER)
  // let hold = new CANNON.Vec3();
  // hold.copy(PLAYER.body.velocity);
  // hold.normalize();
  // console.log(hold);
  // console.log(PLAYER.body);

  // console.log(fc(d.x), fc(d.z));
  // console.log(PLAYER.body)


}, 500);

let start = Date.now();
let frames = 0;
setInterval(() => {
  // ldFPS.innerText = `μFPS: ${Math.trunc(frames / ((Date.now() - start)/1000))}`;
  ldFPS.innerText = "μFPS: "+frames;
  frames = 0;
}, 1000)





let getPlayerData = (player) => {
  let position = player.body.position;
  let rotation = player.mesh.rotation;
  let faceRotation = player.mesh.children[1].rotation;

  return( {
    position: player.body.position,
    quaternion: player.mesh.quaternion,
    head_quaternion: player.mesh.children[1].quaternion,
    left_arm_quaternion: player.mesh.children[2].quaternion,
    right_arm_quaternion: player.mesh.children[3].quaternion,
    left_leg_quaternion: player.mesh.children[4].quaternion,
    right_leg_quaternion: player.mesh.children[5].quaternion,
  })
  // console.log(faceRotation)
  return {position, rotation, faceRotation}
}

setTimeout(() => {getPlayerData(PLAYER)}, 1000)
// getPlayerData()




let textureLoader = new THREE.TextureLoader();
textureLoader.load("./assets/face_01.png", (texture) => {

let headGeo = new THREE.BoxGeometry(2,2,2);
let materialArray = new Array(5).fill(new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
  materialArray.unshift(new THREE.MeshBasicMaterial({ map: texture }));
  console.log(materialArray)
  let headMesh = new THREE.Mesh(headGeo, materialArray);
  headMesh.rotateY(-Math.PI/2);
  headMesh.position.set(-10,2,-10)
  // scene.add(headMesh)

})





// PLAYER X DUMMY
let playerX = createComplexPlayer();

playerX.position.set(10, 4, -5);
playerX.rotateY(Math.PI/2);
scene.add(playerX);

// setInterval(() => {
//   let r = 0.1 * Math.sin((2*Math.PI) * 2 * (Date.now()/1000) + 1);
//   let t = 0.1 * Math.sin((2*Math.PI) * 2 * (Date.now()/800) + 1);
//   playerX.children[2].rotateOnAxis(new THREE.Vector3(1,0,0), r);
//   playerX.children[3].rotateOnAxis(new THREE.Vector3(-1,0,0), r);
//   playerX.children[4].rotateOnAxis(new THREE.Vector3(-1,0,0), t);
//   playerX.children[5].rotateOnAxis(new THREE.Vector3(1,0,0), t);
// }, 30)

// let a = new THREE.Mesh();
// a.scale

let degreeToPi = (d) => { return ((Math.PI/360)*d) }

// playerX.children[2].rotateOnAxis(new THREE.Vector3(1,0,-1), degreeToPi(-75))

playerX.children[2].rotation.x = degreeToPi(-75);
playerX.children[2].rotation.z = degreeToPi(75);

playerX.children[3].rotation.x = degreeToPi(-75);
playerX.children[3].rotation.z = degreeToPi(-75);


// playerX.children[2].translateOnAxis(new THREE.Vector3(0,0,1), 1)
// playerX.children[3].translateOnAxis(new THREE.Vector3(0,0,1), 1)

let animatePlayerX = () => {
  console.log(playerX)
  let start = Date.now();
  let interval = setInterval(() => {
    playerX.children[playerX.children.length-1].scale.add(new THREE.Vector3(0.75,1,0.4));
    if(Date.now() - start > 200) { clearInterval(interval); playerX.children[playerX.children.length-1].scale.set(1,1,1) }
  }, 20)
}









// ATTEMPT TO ADD PARTICLES
// NEED MORE TIME


// let clock = new THREE.Clock(true);
// const batchSystem = new THREEQUARKS.BatchedParticleRenderer();
// const texture = new THREE.TextureLoader().load("./assets/dot.png");
// // Particle system configuration
// const muzzle = {
//     duration: 1,
//     looping: false,
//     startLife: new THREEQUARKS.IntervalValue(0.1, 0.2),
//     startSpeed: new THREEQUARKS.ConstantValue(0),
//     startSize: new THREEQUARKS.IntervalValue(1, 5),
//     startColor: new THREEQUARKS.ConstantColor(new THREE.Vector4(1, 1, 1, 1)),
//     worldSpace: false,

//     maxParticle: 5,
//     emissionOverTime: new THREEQUARKS.ConstantValue(0),
//     emissionBursts: [{
//         time: 1,
//         count: 1,
//         cycle: 1,
//         interval: 0.01,
//         probability: 1,
//     }],
//     shape: new THREEQUARKS.PointEmitter(),
//     texture: new THREE.MeshBasicMaterial({map: texture, transparent: true, blending: THREE.AdditiveBlending}),
//     startTileIndex: 91,
//     uTileCount: 10,
//     vTileCount: 10,
//     renderOrder: 2,
//     renderMode: THREEQUARKS.RenderMode.Mesh
// };

// // Create particle system based on your configuration
// let muzzle1 = new THREEQUARKS.ParticleSystem(batchSystem, {muzzle});
// // developers can customize how the particle system works by
// // using existing behavior or adding their own Behavior.
// muzzle1.addBehavior(new THREEQUARKS.ColorOverLife(new THREEQUARKS.ColorRange(new THREE.Vector4(1, 0.3882312, 0.125, 1), new THREE.Vector4(1, 0.826827, 0.3014706, 1))));
// muzzle1.addBehavior(new THREEQUARKS.SizeOverLife(new THREEQUARKS.PiecewiseBezier([[new THREEQUARKS.Bezier(1, 0.95, 0.75, 0), 0]])));
// // texture atlas animation
// muzzle1.addBehavior(new THREEQUARKS.FrameOverLife(new THREEQUARKS.PiecewiseBezier([[new THREEQUARKS.Bezier(91, 94, 97, 100), 0]])));
// muzzle1.emitter.name = 'muzzle1';
// muzzle1.emitter.position.x = 0;
// muzzle1.emitter.position.y = 5;
// muzzle1.emitter.position.z = -15;




// // Add emitter to your Object3D
// console.log(muzzle1)
// scene.add(muzzle1.emitter);
// scene.add(batchSystem); 










// let ps = new ParticleSystem({parent: bot.mesh, camera})














// let qs = new quarkScene()


getPlayerSettings();
savePlayerSettings();
create_player();

// Animate function
const animate = () => {
  let rate = 1/60;
  world.step(rate, rate, 10);
  
  playerInputs();
  updateGame();
  updateProjectiles();
  sendPlayerPositions();
  sendProjectilePositions();

  // ps.Step(0.01)

  // batchSystem.update();

  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
  renderer.render(scene, camera);
  frames++;
};

setInterval(() => {
  if(!document.webkitHidden || overridewindow) { requestAnimationFrame(animate); }
}, 1000 / 60);

animate()
// scene.add(flame)











































