import * as THREE from 'three';
import * as CANNON from "cannon-es";


export default (id, hitbox=false) => {
    // make a player model
    // 2 legs
    // 2 arms
    // a torso
    // and a head

    let torsoGeo = new THREE.BoxGeometry(2,3,2);
    let headGeo = new THREE.BoxGeometry(2,2,2);
    let armGeo = new THREE.BoxGeometry(1,2,1);
    let legGeo = new THREE.BoxGeometry(1,2,1);

    let torsoMat = new THREE.MeshBasicMaterial({ color: 0x639FFF });
    let headMat = new THREE.MeshBasicMaterial({ color: 0x8863ff });
    let armMat = new THREE.MeshBasicMaterial({ color: 0x63ff63 });
    let legMat = new THREE.MeshBasicMaterial({ color: 0xffd063 });

    let torsoMesh = new THREE.Mesh(torsoGeo, torsoMat);
    let headMesh = new THREE.Mesh(headGeo, headMat);
    let armMeshL = new THREE.Mesh(armGeo, armMat);
    let armMeshR = new THREE.Mesh(armGeo, armMat);
    let legMeshL = new THREE.Mesh(legGeo, legMat);
    let legMeshR = new THREE.Mesh(legGeo, legMat);

    

    let player = new THREE.Group();
    player.add(torsoMesh, headMesh, armMeshL, armMeshR, legMeshL, legMeshR);
    headMesh.position.setY(2.5);
    armMeshL.position.setX(1.5);
    armMeshR.position.setX(-1.5);
    legMeshL.position.set(0.5, -2.5, 0);
    legMeshR.position.set(-0.5, -2.5, 0);

    if(hitbox) {
        let hb = new THREE.Mesh(new THREE.BoxGeometry(2.5,6,2.5), new THREE.MeshBasicMaterial({ color: 0xFF00FF, wireframe: true }))
        player.add(hb);
    }

    // armMeshL.rotateOnAxis(new THREE.Vector3(1,0,0), 2)
    // armMeshR.rotateOnAxis(new THREE.Vector3(1,0,0), -2)

    return player
}