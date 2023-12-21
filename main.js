// MAIN - GAMING 2

import * as THREE from 'three';
import * as CANNON from "cannon-es";
import 'js-circle-progress';
import Player from './player.js';
import { acceleratedRaycast } from 'three-mesh-bvh'

import createComplexPlayer from "./player_v2.js";

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
  playerMaterial.friction = 0.1;
  playerMaterial.restitution = 0;
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
      console.log("perfect!");
      // reflect projectile / must be perfect parry to reflect again
      reflectProjectile(event.body, true);
    } else if(PLAYER.time_since_last_parry + PLAYER.parry_window > Date.now()) {
      console.log("parry!");
      // reflect projectile
      reflectProjectile(event.body, false);
    } else {
      console.log('player hit!');
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
  }
}

// let playerGeometry = new THREE.BoxGeometry(2,4,2);
// let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
// let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
let create_player = () => {
  let playerMesh = createComplexPlayer("steve", currentSettings.showHitboxes);
  playerMesh.userData.cc = "player"
  create_player_body(PLAYER);
  PLAYER.mesh = playerMesh;
  scene.add(PLAYER.mesh);
}




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
      toggleBuildMode();
      break
    case currentSettings.keybinds.parry:
      parry();
      break
    case currentSettings.keybinds.menu:
      toggleTab(event);
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
    cameraRotation.x -= event.movementY * sensitivity;
    cameraRotation.y -= event.movementX * sensitivity;
    cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));
    camera.rotation.copy(cameraRotation);
    PLAYER.mesh.rotation.y = (camera.rotation.y)
  }
  mouseState.x = event.movementX;
  mouseState.y = event.movementY;
});


// console.log(PLAYER.mesh);




let updateGame = () => {
    PLAYER.mesh.position.copy(PLAYER.body.position);
    // playerMesh.quaternion.copy(PLAYER.body.quaternion);
  
    camera.position.copy(PLAYER.body.position);
    camera.position.y += worldBuildMode==true ? 42.5 : 2.5;
    // camera.position.z += 4
  
    let playerGravity = new CANNON.Vec3(0, -500, 0);
    let gravityForce = new CANNON.Vec3();
    PLAYER.body.vectorToWorldFrame(playerGravity, gravityForce);
    PLAYER.body.applyForce(gravityForce, PLAYER.body.position);

    let r = 0.3 * Math.sin((2*Math.PI) * 15 * (Date.now()/20000) + 1);
    let t = 0.1 * Math.sin((2*Math.PI) * 30 * (Date.now()/10000) + 1);
    PLAYER.mesh.children[2].rotateOnAxis(new THREE.Vector3(1,0,0), r*(((PLAYER.body.velocity.x+1) + (PLAYER.body.velocity.z+1))/20));
    PLAYER.mesh.children[3].rotateOnAxis(new THREE.Vector3(-1,0,0), r*(((PLAYER.body.velocity.x+1) + (PLAYER.body.velocity.z+1))/20));
    PLAYER.mesh.children[4].rotateOnAxis(new THREE.Vector3(-1,0,0), t*3*(((PLAYER.body.velocity.x+1) + (PLAYER.body.velocity.z+1))/20));
    PLAYER.mesh.children[5].rotateOnAxis(new THREE.Vector3(1,0,0), t*3*(((PLAYER.body.velocity.x+1) + (PLAYER.body.velocity.z+1))/20));
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


  
  let raycast = new THREE.Raycaster(start, direction, 0, length);
  let intersections = raycast.intersectObjects(scene.children);
  if(intersections.length > 0) {
    for(let i = 0; i < intersections.length; i++) {
      if(intersections[i].object.type == "Mesh") {
        // console.log("mesh hit", intersections[0].distance);
        return intersections[0].distance-1
      }
    }
  }
  return PLAYER.dodge_distance
}






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
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x8DC9AB, wireframe: false });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.quaternion.copy(floor.quaternion);
floorMesh.position.copy(floor.position);
floorMesh.userData.cc = "floor";
floor.userData = {mesh: floorMesh, cc: "floor"}
scene.add(floorMesh);


let wallGeo = new THREE.BoxGeometry(10,10,1);
let wallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
let wall = new THREE.Mesh(wallGeo, wallMat);
wall.position.set(0, 5, -15);
wall.userData.cc = "wall";
scene.add(wall);

let wallShape = new CANNON.Box(new CANNON.Vec3(5,5,0.5));
let wallBody = new CANNON.Body({ shape: wallShape, mass: 0 });
let wallBodyMaterial = new CANNON.Material("wallBodyMaterial");
wallBodyMaterial.friction = 0.1;
wallBodyMaterial.restitution = 0.1;
wallBody.material = wallBodyMaterial;
wallBody.userData = { cc: "wall" }
wallBody.position.copy(wall.position);
world.addBody(wallBody)


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
let projectiles = [];

class TrainingBot {
  constructor(mesh, body) {
    this.mesh = mesh;
    this.body = body;
    this.fr = 2000;
    this.damage = 10;
    this.speed = 100;

    setInterval(() => {
      if(onlinePlayerID == undefined) {
        this.shootProjectile();
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
    if(onlinePlayerID != undefined) {
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

// let bot = new TrainingBot(botMesh, botBody);







let parry = () => {
  if(PLAYER.time_since_last_parry + PLAYER.parry_cooldown < Date.now()) {
    PLAYER.time_since_last_parry = Date.now();
  }
}

let reflectProjectile = (projectile, perfect=false) => {
  if(perfect) {
    PLAYER.time_since_last_parry = 0;
    projectile.userData.createdAt = Date.now();
    let direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    projectile.position.copy(camera.position);
    projectile.velocity.set(direction.x *100, direction.y, direction.z *100);
    projectile.userData.mesh.userData.parryLevel += 1;
    projectile.userData.mesh.material.color.setHex(parryLevel[projectile.userData.mesh.userData.parryLevel]);
  } else {
    // PLAYER.time_since_last_parry = 0;
    projectile.userData.createdAt = Date.now();
    let direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    projectile.position.copy(camera.position);
    projectile.velocity.set(direction.x *75, direction.y, direction.z *75);
  }
}






let updateHP = (p="n/a") => {
  document.getElementById("hp-label").textContent = PLAYER.hp;
  if(PLAYER.hp <= 0) {
    // show win screen
    console.log(`player ${onlinePlayerID} loses`);
    socket.emit("showwinner", onlineRoomID, p)
    setTimeout(() => {
      socket.emit("resetroom", onlineRoomID);
    },3000)
  }
}








let dcw = document.getElementById("dodge-cooldown-wrapper");
const dodge_cooldown = document.createElement('circle-progress');
dodge_cooldown.classList.add("dodge-circle")
dodge_cooldown.max = 100;
dodge_cooldown.value = 0;
dodge_cooldown.textFormat = (v) => {
  if(v == 100) { return "[M2]" }
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
  if(v == 100) { return "[M0]" }
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

let projectiledToRemove = [];

let updateProjectiles = () => {
  if(projectiles.length > 0) {
    for(let i = 0; i < projectiles.length; i++) {
      projectiles[i].mesh.position.copy(projectiles[i].body.position);
      // console.log(projectiles[0].body.position)
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





let sendHit = (player, pid) => {
  socket.emit("playerhit", onlineRoomID, onlinePlayerID, player, pid)
}


let onlinePlayers = {};

let makeOnlinePlayer = (playerID, data) => {
  // let pg = new THREE.BoxGeometry(2, 4, 2);
  // let pm = new THREE.MeshBasicMaterial({ color: parryLevel[playerID] });
  // let pMesh = new THREE.Mesh(pg, pm);
  let pMesh = createComplexPlayer(playerID, currentSettings.showHitboxes);
  pMesh.userData.playerID = playerID;

  let ps = new CANNON.Box(new CANNON.Vec3(1.25, 3, 1.25));
  let pBody = new CANNON.Body({ shape: ps, mass: 50 });
  pBody.userData = { cc: "onlineEnemyPlayer", playerID: playerID };
  pBody.addEventListener("collide", (e) => {
    if(e.body.userData.cc == "playerProjectile") { sendHit(e.target.userData.playerID, `p${onlinePlayerID}-${e.body.userData.mesh.uuid}`); e.body.userData.createdAt -= 3000; }
    // if(e.target.userData.cc ==)
  })

  pMesh.position.set(data.position.x, data.position.y, data.position.z);
  // pMesh.rotation.set(data.rotation);
  pBody.position.copy(pMesh.position);
  scene.add(pMesh);
  world.addBody(pBody);
  onlinePlayers[playerID] = {playerID, mesh: pMesh, body: pBody};
  // console.log(pMesh);
  // console.log(data.rotation)
}

let updateOnlinePlayers = (players) => {
  // console.log(players)
  let pkeys = Object.keys(players);
  for(let i = 0; i < pkeys.length; i++) {
    if(onlinePlayers[pkeys[i]] != undefined) {
      if(pkeys[i] == onlinePlayerID) { // skip if own player

      } else {
        onlinePlayers[pkeys[i]].mesh.position.set(players[pkeys[i]].position.x, players[pkeys[i]].position.y, players[pkeys[i]].position.z);
        onlinePlayers[pkeys[i]].mesh.rotation.copy(players[pkeys[i]].rotation)
        onlinePlayers[pkeys[i]].body.position.set(players[pkeys[i]].position.x, players[pkeys[i]].position.y, players[pkeys[i]].position.z);
      
        let r = 0.3 * Math.sin((2*Math.PI) * 15 * (Date.now()/20000) + 1);
        let t = 0.1 * Math.sin((2*Math.PI) * 30 * (Date.now()/10000) + 1);
        onlinePlayers[pkeys[i]].mesh.children[2].rotateOnAxis(new THREE.Vector3(1,0,0), r*(((onlinePlayers[pkeys[i]].body.velocity.x+1) + (onlinePlayers[pkeys[i]].body.velocity.z+1))/10));
        onlinePlayers[pkeys[i]].mesh.children[3].rotateOnAxis(new THREE.Vector3(-1,0,0), r*(((onlinePlayers[pkeys[i]].body.velocity.x+1) + (onlinePlayers[pkeys[i]].body.velocity.z+1))/10));
        onlinePlayers[pkeys[i]].mesh.children[4].rotateOnAxis(new THREE.Vector3(-1,0,0), t*3*(((onlinePlayers[pkeys[i]].body.velocity.x+1) + (onlinePlayers[pkeys[i]].body.velocity.z+1))/10));
        onlinePlayers[pkeys[i]].mesh.children[5].rotateOnAxis(new THREE.Vector3(1,0,0), t*3*(((onlinePlayers[pkeys[i]].body.velocity.x+1) + (onlinePlayers[pkeys[i]].body.velocity.z+1))/10));
      }
    } else {
      if(pkeys[i] == onlinePlayerID) { // skip if own player

      } else {
        makeOnlinePlayer(pkeys[i], {position: players[pkeys[i]].position, rotation: players[pkeys[i]].rotation});
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
    // toggleCursorLock();
    keybinds.focus();
  } else {
    keybinds.close();
    isKeybindsOpen = false;
    // toggleCursorLock();
  }
}






let handleKeybindInput = (e) => {
  if(e.key != undefined) {
    e.preventDefault();
    e.target.value = e.key;
    console.log(e.key)
  } else {
    // e.preventDefault();
    e.target.value = `mb${e.button}`;
  }

}


document.getElementById("key-forward-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-backward-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-left-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-right-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-jump-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-shoot-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-dodge-value").addEventListener("keydown", handleKeybindInput)
document.getElementById("key-parry-value").addEventListener("keydown", handleKeybindInput)

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
  // console.log(document.getElementById("hitbox-value").checked)
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

let updateRoomProjectiles = (rps) => {
  // console.log(rps)
  let keys = Object.keys(rps);
  for(let i = 0; i < keys.length; i++) { // update Proj
    if(currentRoomProjectiles[rps[keys[i]].pid] != undefined) {
      currentRoomProjectiles[rps[keys[i]].pid].mesh.position.set(rps[keys[i]].position.x,rps[keys[i]].position.y,rps[keys[i]].position.z)
    } else { // new Proj
      currentRoomProjectiles[rps[keys[i]].pid] = {mesh: makeRoomProjectile(rps[keys[i]].position, rps[keys[i]].pid, rps[keys[i]].parryLevel, rps[keys[i]].owner)}
    }
  }
  Object.keys(currentRoomProjectiles).forEach(pid => { if(rps[pid] == undefined) {scene.remove(currentRoomProjectiles[pid].mesh); delete currentRoomProjectiles[pid]; } })
}














import axios from "axios";
import io from "socket.io-client";


let ld = document.getElementById("login-dialog");
// ld.showModal();

let od = document.getElementById("online-dialog");
// od.showModal();

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


// let r = document.getElementById("roomid-label");
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

document.getElementById("connect").addEventListener("click", (event) => {
    // socket = io("http://34.239.48.37/");
    socket = io("http://localhost:4001");
    socket.on("roomid", (id, playerID) => {
      console.log(socket)
      // console.log(playerID)
      onlinePlayerID = playerID;
      re.textContent = "";
      inRoom = true;
      ridl.textContent = id;
      onlineRoomID = id;
      lr.classList.remove("unclickable");
      jr.classList.add("unclickable");
    }); // in the game - invoke a function to put player in room
    socket.on("roomjoinfail", (id) => { re.textContent = `failed to join room: ${id}` });
    socket.on("leaveroom", () => {
        ridl.textContent = "00000";
        inRoom = false;
        onlinePlayerID = undefined;
    })
    socket.on("allpositions", (players) => {
      // console.log(players)
      updateOnlinePlayers(players);
    })
    socket.on("roomprojectiles", rps => { updateRoomProjectiles(rps) }) // actually create and move said projectiles... the hard part... maybe?
    socket.on("takehit", (playerID, pid) => {
      console.log(`take hit: ${playerID}`);
      if(playerID == onlinePlayerID) {
        onlinePlayerCollision(pid);
      }
    })
    socket.on("reset", (pps) => {
      console.log("RESETING ROOM")
      PLAYER.hp = 10;
      updateHP();
      PLAYER.body.position.set(pps[onlinePlayerID][0],pps[onlinePlayerID][1],pps[onlinePlayerID][2]);
    })
    socket.on("winner", (playerID) => {
      let w = document.getElementById("winner-banner");
      w.hidden = false;
      w.innerText = `PLAYER ${playerID} WINS`
      setTimeout(() => {
        w.hidden = true;
        w.innerText = ""
      }, 2900);
    })
    socket.on("removeplayer", (playerID) => { console.log("REMOVIN G PLAYER", playerID); scene.remove(onlinePlayers[playerID].mesh); world.removeBody(onlinePlayers[playerID].body); delete onlinePlayers[playerID]})
    // socket.on("pong", (ms) => {
    //   ldPing.innerText = `ping: ${ms}ms`;
    // })
  })  

window.onclose = () => {
  socket.emit("playerdisconnect", ridl.innerText, onlinePlayerID);
}

document.getElementById("disconnect").addEventListener("click", (event) => {
    socket.emit("playerdisconnect", ridl.innerText, onlinePlayerID);
    socket.close();
})

document.getElementById("makeroom").addEventListener("click", (event) => {
    socket.emit("makeroom");
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

let live_data = document.getElementById("live-data");
// let ic = document.createElement("li");
// ic.innerText = "connected: false";
// ic.id = "data-connected-value"
// ic.classList.add("data-list-item");
// live_data.appendChild(ic);

// let pn = document.createElement("li");
// pn.textContent = onlinePlayerID;
// pn.id = "data-playernumber-value"
// pn.classList.add("data-list-item");
// live_data.appendChild(id);

let ldC = document.getElementById("ld-connected");
let ldP = document.getElementById("ld-playernumber");
let ldFPS = document.getElementById("ld-fps");
let ldPing = document.getElementById("ld-ping");


setInterval(() => {
    if(socket) {
        if(socket.connected) {

          const startms = Date.now();

          // volatile, so the packet will be discarded if the socket is not connected
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







let onlinePlayerCollision = (pid) => {
  socket.emit("deleteprojectile", pid, ridl.innerText);
  if(PLAYER.time_since_last_parry + PLAYER.perfect_parry_window > Date.now()) {
    // if(true) {
    console.log("perfect!");
    // reflect projectile / must be perfect parry to reflect again
    // reflectProjectile(event.body, true);

    // fire a new projectile with a new parry level
    // console.log(currentRoomProjectiles[pid])
    let p = PLAYER.createProjectile(camera, currentRoomProjectiles[pid].mesh.userData.parryLevel+1);
    scene.add(p.mesh);
    world.addBody(p.body);
    projectiles.push(p);

  } else if(PLAYER.time_since_last_parry + PLAYER.parry_window > Date.now()) {
    console.log("parry!");
    // reflect projectile
    // reflectProjectile(event.body, false);

    // fire a new projectile with a new parry level
    let p = PLAYER.createProjectile(camera, currentRoomProjectiles[pid].mesh.userData.parryLevel);
    scene.add(p.mesh);
    world.addBody(p.body);
    projectiles.push(p);

  } else {
    console.log('player hit!');
    PLAYER.hp -= Number(currentRoomProjectiles[pid].mesh.userData.parryLevel) +1;
    updateHP(currentRoomProjectiles[pid].mesh.userData.owner);
    // let damage = document.getElementById("damage");
    // damage.classList.add("damage");
    // damage.hidden = false;
    // setTimeout(() => {
    //   damage.classList.remove("damage");
    //   damage.hidden = true;
    // }, 300);
    // take damage / delete projectile
  }
}








let sendPlayerPositions = () => {
  if(onlinePlayerID != undefined) {
    socket.emit("playerposition", ridl.innerText, onlinePlayerID, getPlayerData(PLAYER))
  }
}

// cannot send whole CANNON objects and THREE meshes 
// just send position and metadata as an object
// and each user will have to make the projectiles on thier own

// okay new issue... 
// every frame the same projectiles get added to the server,
// and never get deleted
// and even 1 projectile will be 100s after a couple seconds
let sendProjectilePositions = () => {
  if(onlinePlayerID != undefined) {
    let projectilesToEmit = [];
    projectiles.forEach(p => {
      projectilesToEmit.push({position: p.body.position, pid: `p${onlinePlayerID}-${p.mesh.uuid}`, owner: onlinePlayerID, parryLevel: p.mesh.userData.parryLevel})
    })
    socket.emit("projectiles", projectilesToEmit, onlinePlayerID, onlineRoomID)
  }
}




// let a = ["hello", "tall", "cat"];
// console.log({...a})






setInterval(() => {
  // onlinePlayers.forEach(player => { console.log(player) })
  // console.log("other players in room:", Object.keys(onlinePlayers).length);
  // console.log("online_player_id:", onlinePlayerID);
  // console.log("room_id:", ridl.innerText)
  // console.log(renderer)
  // console.log("\nPLAYER VELOCITY:\n", "x:", PLAYER.body.velocity.x.toFixed(1), "y:", PLAYER.body.velocity.y.toFixed(1), "z:", PLAYER.body.velocity.z.toFixed(1))
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
  return {position, rotation}
}











let playerX = createComplexPlayer();
// playerX.children.forEach((part, i) => {
//   part.position.set(3*i, 2, 0);
//   // scene.add(playerX[part])
// })
playerX.position.set(0, 3, -5)
scene.add(playerX)

// console.log(playerX)

setInterval(() => {
  let r = 0.3 * Math.sin((2*Math.PI) * 15 * (Date.now()/20000) + 1);
  let t = 0.1 * Math.sin((2*Math.PI) * 30 * (Date.now()/10000) + 1);
  playerX.children[2].rotateOnAxis(new THREE.Vector3(1,0,0), r);
  playerX.children[3].rotateOnAxis(new THREE.Vector3(-1,0,0), r);
  playerX.children[4].rotateOnAxis(new THREE.Vector3(-1,0,0), t*3);
  playerX.children[5].rotateOnAxis(new THREE.Vector3(1,0,0), t*3);
}, 30)

// setInterval(()=> {
//   playerX.rotateOnAxis(new THREE.Vector3(0,1,0), 0.1)
// },30)











// savePlayerSettings();
getPlayerSettings();
savePlayerSettings();
create_player();
// Animate function
const animate = () => {

    let rate = 1/60;
    world.step(rate, rate, 10);
    // updateCooldowns();
    
    playerInputs();
    updateGame();
    updateProjectiles();
    sendPlayerPositions();
    sendProjectilePositions();
  
    bodiesToRemove.forEach(removeBodies);
    meshToRemove.forEach(removeMesh);
      
    renderer.render(scene, camera);
    frames++;
};

setInterval(() => {
  if(!document.webkitHidden) { requestAnimationFrame(animate); }
}, 1000 / 60);


animate()