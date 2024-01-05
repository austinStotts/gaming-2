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
    let wallBody2 = new CANNON.Body({ shape: wallShape, mass: 0 });
    wallBody2.material = wallBodyMaterial;
    wallBody2.userData = { cc: "wall" }


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
    let ramp2 = new THREE.Mesh(rampGeo, rampMat);
    ramp2.userData.cc = "floor";
    let rampBody2 = new CANNON.Body({ shape: rampShape, mass: 0 });
    rampBody2.material = rampBodyMaterial;
    rampBody2.userData = { cc: "floor" }


    let outsideWallGeo = new THREE.BoxGeometry(100,40,1);
    let outsideWallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let outsideWallShape = new CANNON.Box(new CANNON.Vec3(50,20,0.5));

    let outsideWall1 = new THREE.Mesh(outsideWallGeo, outsideWallMat);
    outsideWall1.userData.cc = "wall";
    let outsideWallBody1 = new CANNON.Body({ shape: outsideWallShape, mass: 0 });
    outsideWallBody1.material = wallBodyMaterial;
    outsideWallBody1.userData = { cc: "wall" }
    let outsideWall2 = new THREE.Mesh(outsideWallGeo, outsideWallMat);
    outsideWall2.userData.cc = "wall";
    let outsideWallBody2 = new CANNON.Body({ shape: outsideWallShape, mass: 0 });
    outsideWallBody2.material = wallBodyMaterial;
    outsideWallBody2.userData = { cc: "wall" }

    
    let endWallGeo = new THREE.BoxGeometry(60,40,1);
    let endWallMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let endWallShape = new CANNON.Box(new CANNON.Vec3(30,20,0.5));

    let endWall1 = new THREE.Mesh(endWallGeo, endWallMat);
    endWall1.userData.cc = "wall";
    let endWallBody1 = new CANNON.Body({ shape: endWallShape, mass: 0 });
    endWallBody1.material = wallBodyMaterial;
    endWallBody1.userData = { cc: "wall" }
    let endWall2 = new THREE.Mesh(endWallGeo, endWallMat);
    endWall2.userData.cc = "wall";
    let endWallBody2 = new CANNON.Body({ shape: endWallShape, mass: 0 });
    endWallBody2.material = wallBodyMaterial;
    endWallBody2.userData = { cc: "wall" }


    let floorGeo = new THREE.BoxGeometry(20,1,100);
    let floorMat = new THREE.MeshBasicMaterial({ color: 0x3B5674 });
    let floorShape = new CANNON.Box(new CANNON.Vec3(10,0.5,50));
    let floorBodyMaterial = new CANNON.Material("floorBodyMaterial");
    floorBodyMaterial.friction = 0.05;
    floorBodyMaterial.restitution = 0;

    let floor1 = new THREE.Mesh(floorGeo, floorMat);
    floor1.userData.cc = "floor";
    let floorBody1 = new CANNON.Body({shape: floorShape, mass: 0});
    floorBody1.material = floorBodyMaterial;
    floorBody1.userData = { cc: "floor" }
    let floor2 = new THREE.Mesh(floorGeo, floorMat);
    floor2.userData.cc = "floor";
    let floorBody2 = new CANNON.Body({shape: floorShape, mass: 0});
    floorBody2.material = floorBodyMaterial;
    floorBody2.userData = { cc: "floor" }

    let floorShortGeo = new THREE.BoxGeometry(50,1,40);
    let floorShortShape = new CANNON.Box(new CANNON.Vec3(20,0.5,20));

    let floorShort1 = new THREE.Mesh(floorShortGeo, floorMat);
    floorShort1.userData.cc = "floor";
    let floorShortBody1 = new CANNON.Body({shape: floorShortShape, mass: 0});
    floorShortBody1.material = floorBodyMaterial;
    floorShortBody1.userData = { cc: "floor" }
    let floorShort2 = new THREE.Mesh(floorShortGeo, floorMat);
    floorShort2.userData.cc = "floor";
    let floorShortBody2 = new CANNON.Body({shape: floorShortShape, mass: 0});
    floorShortBody2.material = floorBodyMaterial;
    floorShortBody2.userData = { cc: "floor" }


    let boxGeo = new THREE.BoxGeometry(20,20,1);
    let boxMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let boxShape = new CANNON.Box(new CANNON.Vec3(10,10,0.5));

    let box1 = new THREE.Mesh(boxGeo, boxMat);
    box1.userData.cc = "box";
    let boxBody1 = new CANNON.Body({shape: boxShape, mass: 0});
    boxBody1.material = wallBodyMaterial;
    boxBody1.userData = { cc: "wall" }

    let box2 = new THREE.Mesh(boxGeo, boxMat);
    box2.userData.cc = "box";
    let boxBody2 = new CANNON.Body({shape: boxShape, mass: 0});
    boxBody2.material = wallBodyMaterial;
    boxBody2.userData = { cc: "wall" }

    let box3 = new THREE.Mesh(boxGeo, boxMat);
    box3.userData.cc = "box";
    let boxBody3 = new CANNON.Body({shape: boxShape, mass: 0});
    boxBody3.material = wallBodyMaterial;
    boxBody3.userData = { cc: "wall" }

    let box4 = new THREE.Mesh(boxGeo, boxMat);
    box4.userData.cc = "box";
    let boxBody4 = new CANNON.Body({shape: boxShape, mass: 0});
    boxBody4.material = wallBodyMaterial;
    boxBody4.userData = { cc: "wall" }


    let deathboxGeo = new THREE.BoxGeometry(19.9,5,19.9);
    let deathboxMat = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    let deathboxShape = new CANNON.Box(new CANNON.Vec3(9.9,2.5,9.9));
    let deathboxBodyMaterial = new CANNON.Material("deathboxBodyMaterial");
    deathboxBodyMaterial.friction = 0.05;
    deathboxBodyMaterial.restitution = 0;

    let deathbox = new THREE.Mesh(deathboxGeo, deathboxMat);
    box4.userData.cc = "deathbox";
    let deathboxBody = new CANNON.Body({ shape: deathboxShape, mass: 0});
    deathboxBody.material = deathboxBodyMaterial;
    deathboxBody.userData = { cc: "deathbox" }


    let rampTallGeo = new THREE.BoxGeometry(9.9,60,1);
    let rampTallShape = new CANNON.Box(new CANNON.Vec3(4.95,30,0.5));


    let rampTall1 = new THREE.Mesh(rampTallGeo, rampMat);
    rampTall1.userData.cc = "floor";
    let rampTallBody1 = new CANNON.Body({ shape: rampTallShape, mass: 0 });
    rampTallBody1.material = rampBodyMaterial;
    rampTallBody1.userData = { cc: "floor" }
    let rampTall2 = new THREE.Mesh(rampTallGeo, rampMat);
    rampTall2.userData.cc = "floor";
    let rampTallBody2 = new CANNON.Body({ shape: rampTallShape, mass: 0 });
    rampTallBody2.material = rampBodyMaterial;
    rampTallBody2.userData = { cc: "floor" }


    let arena = new THREE.Group();
    arena.add(wall1, wall2, ramp1, ramp2, outsideWall1, outsideWall2, endWall1, endWall2, floor1, floor2, floorShort1, floorShort2, box1, box2, box3, box4, deathbox, rampTall1, rampTall2)
    let arenaBodies = [wallBody1, wallBody2, rampBody1, rampBody2, outsideWallBody1, outsideWallBody2, endWallBody1, endWallBody2, floorBody1, floorBody2, floorShortBody1, floorShortBody2, boxBody1, boxBody2, boxBody3, boxBody4, deathboxBody, rampTallBody1, rampTallBody2];

    wall1.position.set(-20, 5, -20);
    wall2.position.set(-20, 5, 20);
    ramp1.rotateX((Math.PI/4))
    ramp1.position.set(-20, 4.75, -25.1);
    ramp2.rotateX(-(Math.PI/4))
    ramp2.position.set(-20, 4.75, 25.1);
    outsideWall1.position.set(-50, 0, 0);
    outsideWall1.rotateY((Math.PI/2))
    outsideWall2.position.set(10, 0, 0);
    outsideWall2.rotateY((Math.PI/2))
    endWall1.position.set(-20, 0, -50);
    endWall2.position.set(-20, 0, 50);
    floor1.position.set(0, 0, 0);
    floor2.position.set(-40, 0, 0);
    floorShort1.position.set(-20, 0, -30)
    floorShort2.position.set(-20, 0, 30)
    box1.rotateY((Math.PI/2));
    box1.position.set(-9.5, -10.5, 0);
    // box2.rotateY((Math.PI/2));
    box2.position.set(-19.5, -10.5, 10);
    box3.rotateY((Math.PI/2));
    box3.position.set(-29.5, -10.5, 0);
    // box4.rotateY((Math.PI/2));
    box4.position.set(-19.5, -10.5, -10);
    deathbox.position.set(-20,-15,0);
    rampTall1.position.set(-30,-2,-55);
    rampTall1.rotateY((Math.PI/2));
    rampTall1.rotateX((Math.PI/4));
    rampTall2.position.set(-30,-2,55);
    rampTall2.rotateY((Math.PI/2));
    rampTall2.rotateX((Math.PI/4));

    return [arena, arenaBodies];

}