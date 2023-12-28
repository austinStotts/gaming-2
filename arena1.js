import * as THREE from 'three';
import * as CANNON from "cannon-es";

export default () => {
    let wallGeo = new THREE.BoxGeometry(10,10,1);
    let wallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let wallShape = new CANNON.Box(new CANNON.Vec3(5,5,0.5));
    let wallBodyMaterial = new CANNON.Material("wallBodyMaterial");
    wallBodyMaterial.friction = 0.1;
    wallBodyMaterial.restitution = 0.1;


    let wall1 = new THREE.Mesh(wallGeo, wallMat);
    wall1.userData.cc = "wall";

    let wall2 = new THREE.Mesh(wallGeo, wallMat);
    wall2.userData.cc = "wall";

    let wallBody1 = new CANNON.Body({ shape: wallShape, mass: 0 });
    wallBody1.material = wallBodyMaterial;
    wallBody1.userData = { cc: "wall" }
    // wallBody1.position.copy(wall1.position);

    let wallBody2 = new CANNON.Body({ shape: wallShape, mass: 0 });
    wallBody2.material = wallBodyMaterial;
    wallBody2.userData = { cc: "wall" }
    // wallBody2.position.copy(wall2.position);



    let rampGeo = new THREE.BoxGeometry(9.9,14.3,1);
    let rampMat = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    let rampShape = new CANNON.Box(new CANNON.Vec3(4.95,7.15,0.5));
    let rampBodyMaterial = new CANNON.Material("rampBodyMaterial");
    rampBodyMaterial.friction = 0.05;
    rampBodyMaterial.restitution = 0.9;


    let ramp1 = new THREE.Mesh(rampGeo, rampMat);
    ramp1.userData.cc = "floor";

    let rampBody1 = new CANNON.Body({ shape: rampShape, mass: 0 });
    rampBody1.material = rampBodyMaterial;
    rampBody1.userData = { cc: "floor" }
    // rampBody1.position.copy(ramp1.position);
    // rampBody1.quaternion.copy(ramp1.quaternion);

    let ramp2 = new THREE.Mesh(rampGeo, rampMat);

    ramp2.userData.cc = "floor";

    let rampBody2 = new CANNON.Body({ shape: rampShape, mass: 0 });
    rampBody2.material = rampBodyMaterial;
    rampBody2.userData = { cc: "floor" }
    // rampBody2.position.copy(ramp2.position);
    // rampBody2.quaternion.copy(ramp2.quaternion);


    let outsideWallGeo = new THREE.BoxGeometry(90,20,1);
    let outsideWallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let outsideWallShape = new CANNON.Box(new CANNON.Vec3(45,10,0.5));


    let outsideWall1 = new THREE.Mesh(outsideWallGeo, outsideWallMat);
    outsideWall1.userData.cc = "wall";

    let outsideWallBody1 = new CANNON.Body({ shape: outsideWallShape, mass: 0 });
    outsideWallBody1.material = wallBodyMaterial;
    outsideWallBody1.userData = { cc: "wall" }
    // outsideWallBody1.position.copy(outsideWall1.position);
    // outsideWallBody1.quaternion.copy(outsideWall1.quaternion);

    let outsideWall2 = new THREE.Mesh(outsideWallGeo, outsideWallMat);
    outsideWall2.userData.cc = "wall";

    let outsideWallBody2 = new CANNON.Body({ shape: outsideWallShape, mass: 0 });
    outsideWallBody2.material = wallBodyMaterial;
    outsideWallBody2.userData = { cc: "wall" }
    // outsideWallBody2.position.copy(outsideWall2.position);
    // outsideWallBody2.quaternion.copy(outsideWall2.quaternion);


    let endWallGeo = new THREE.BoxGeometry(40,20,1);
    let endWallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let endWallShape = new CANNON.Box(new CANNON.Vec3(20,10,0.5));

    let endWall1 = new THREE.Mesh(endWallGeo, endWallMat);
    endWall1.userData.cc = "wall";

    let endWallBody1 = new CANNON.Body({ shape: endWallShape, mass: 0 });
    endWallBody1.material = wallBodyMaterial;
    endWallBody1.userData = { cc: "wall" }
    // endWallBody1.position.copy(endWall1.position);
    // endWallBody1.quaternion.copy(endWall1.quaternion);

    let endWall2 = new THREE.Mesh(endWallGeo, endWallMat);
    endWall2.userData.cc = "wall";

    let endWallBody2 = new CANNON.Body({ shape: endWallShape, mass: 0 });
    endWallBody2.material = wallBodyMaterial;
    endWallBody2.userData = { cc: "wall" }
    // endWallBody2.position.copy(endWall2.position);
    // endWallBody2.quaternion.copy(endWall2.quaternion);


    let arena = new THREE.Group();
    arena.add(wall1, wall2, ramp1, ramp2, outsideWall1, outsideWall2, endWall1, endWall2)
    let arenaBodies = [wallBody1, wallBody2, rampBody1, rampBody2, outsideWallBody1, outsideWallBody2, endWallBody1, endWallBody2];

    wall1.position.set(-20, 5, -20);
    wall2.position.set(-20, 5, 20);
    ramp1.rotateX((Math.PI/4))
    ramp1.position.set(-20, 4.75, -25.1);
    ramp2.rotateX(-(Math.PI/4))
    ramp2.position.set(-20, 4.75, 25.1);
    outsideWall1.position.set(-40, 10, 0);
    outsideWall1.rotateY((Math.PI/2))
    outsideWall2.position.set(0, 10, 0);
    outsideWall2.rotateY((Math.PI/2))
    endWall1.position.set(-20, 5, -50);
    endWall2.position.set(-20, 5, 50);

    return [arena, arenaBodies];

}