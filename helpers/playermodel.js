import * as THREE from 'three';
import * as CANNON from "cannon-es";
import ch from "./crosshair";

//198528518018


export default (id, hitbox=false, isSelf=false, face="droop_face_01.png") => {
    // make a player model
    // 2 legs
    // 2 arms
    // a torso
    // and a head

    let playerColors = [0xF08080, 0xF39C12, 0xE74C3C, 0xA569BD, 0x5DADE2, 0x2ECC71, 0xF1C40F, 0x2C3E50]

    let torsoGeo = new THREE.BoxGeometry(1.75,3,1.75);
    // let headGeo = new THREE.BoxGeometry(2,2,2);
    let armGeo = new THREE.BoxGeometry(0.75,2,0.75);
    let legGeo = new THREE.BoxGeometry(0.75,2,0.75);

    let torsoMat = new THREE.MeshBasicMaterial({ color: playerColors[id] || 0xFF6688, wireframe: isSelf });
    // let headMat = new THREE.MeshBasicMaterial({ color: 0xFF6688, wireframe: isSelf });
    let armMat = new THREE.MeshBasicMaterial({ color: 0xFF6688, wireframe: isSelf });
    let legMat = new THREE.MeshBasicMaterial({ color: 0xFF6688, wireframe: isSelf });

    let torsoMesh = new THREE.Mesh(torsoGeo, torsoMat);
    // let headMesh = new THREE.Mesh(headGeo, headMat);
    let armMeshL = new THREE.Mesh(armGeo, armMat);
    let armMeshR = new THREE.Mesh(armGeo, armMat);
    let legMeshL = new THREE.Mesh(legGeo, legMat);
    let legMeshR = new THREE.Mesh(legGeo, legMat);

    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    let headGeo = new THREE.BoxGeometry(2,2,2);
    let materials = [
        new THREE.MeshBasicMaterial({ color: 0xF0F }),
        new THREE.MeshBasicMaterial({ color: 0xF0F }),
        new THREE.MeshBasicMaterial({ color: 0xF0F }),
        new THREE.MeshBasicMaterial({ color: 0xF0F }),
        new THREE.MeshBasicMaterial({ color: 0xF0F }),
        new THREE.MeshBasicMaterial({ map: loader.load("../assets/droop_face_01.png") }),
    ]

    let headMesh = new THREE.Mesh(headGeo, materials);


    // counter
    let counterGeo = new THREE.SphereGeometry(0.5);
    let counterMat = new THREE.MeshBasicMaterial({color: 0x9988FF, wireframe: true});

    let counter = new THREE.Mesh(counterGeo, counterMat);

    
    // let crosshair = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1), new THREE.MeshBasicMaterial({transparent: true ,wireframe: true}));
    let crosshair = ch();
    headMesh.add(crosshair)

    let player = new THREE.Group();
    player.add(torsoMesh, headMesh, armMeshL, armMeshR, legMeshL, legMeshR);
    player.children.forEach(child => { child.add(new THREE.BoxHelper(child, 0x000000)) })
    player.add(counter)
    headMesh.position.setY(2.5);
    armMeshL.position.setX(1.3);
    armMeshR.position.setX(-1.3);
    legMeshL.position.set(0.4, -2.5, 0);
    legMeshR.position.set(-0.4, -2.5, 0);
    crosshair.position.set(0,0,-1.3);

    if(hitbox) {
        let hb = new THREE.Mesh(new THREE.BoxGeometry(2.5,6,2.5), new THREE.MeshBasicMaterial({ color: 0xFF00FF, wireframe: true }))
        player.add(hb);
    }

    return player

}