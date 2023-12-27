import * as THREE from 'three';
import * as CANNON from "cannon-es";

export default () => {
    let hGeo = new THREE.BoxGeometry(0.05,0.002,0);
    let vGeo = new THREE.BoxGeometry(0.003,0.05,0);
    let crosshairMat = new THREE.MeshBasicMaterial({ color: 0xFF00FF });

    let crosshair = new THREE.Group();
    let vMesh = new THREE.Mesh(vGeo, crosshairMat);
    let hMesh = new THREE.Mesh(hGeo, crosshairMat);
    crosshair.add(vMesh, hMesh)
    return crosshair;
}