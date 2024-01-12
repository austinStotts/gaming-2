import * as THREE from 'three';
import * as CANNON from "cannon-es";

import PS_lightning from './PS_lightning';
import PS_fire from './PS_fire';
import PS_trail from './PS_trail'
// import createComplexPlayer from "./player_v2";

let parryLevel = [0x2196F3,0x009688,0x8BC34A,0xFFEB3B,0xFF5722,0xEB144C];

export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.speed = 0.1;
        this.acc = 20;

        this.hp = 10;

        this.mesh;
        this.body;

        this.jump_multiplier = 1.75;

        this.dodge_distance = 50;
        this.dodge_cooldown = 1000; // 1000
        this.time_since_last_dodge = Date.now();

        this.parry_cooldown = 1000;
        this.time_since_last_parry = 0;
        this.parry_window = 300;
        this.perfect_parry_window = 100;

        this.time_since_last_shoot = Date.now();
        this.shoot_cooldown = 1500;
        this.projectile_speed = 100;

        this.super_speed = 200;
        this.power = 4;


        this.move_player = this.move_player.bind(this);
    }



    dodge (direction) {
        this.body.velocity.addScaledVector(this.dodge_distance, direction, this.body.velocity);
        this.time_since_last_dodge = Date.now();
    }

    set_body (body) {
        this.body = body;
    }

    move_player (velocity) {
        let captureY = this.body.velocity.y;
        this.body.velocity.addScaledVector(this.acc, velocity, this.body.velocity)
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - this.armor.take_damage(n);
    }

    createProjectile (camera, pl=0) {
        let pGeo = new THREE.SphereGeometry(0.5);
        let pMat = new THREE.MeshBasicMaterial({ color: parryLevel[pl] });
        let pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.userData.parryLevel = pl;
    
        let pShape = new CANNON.Sphere(1);
        let pBody = new CANNON.Body({ shape: pShape, mass: 5, linearDamping: 0.05 });

        let sp = new THREE.Vector3();
        this.mesh.children[1].children[0].getWorldPosition(sp);
        pBody.position.set(sp.x, sp.y, sp.z);
        pMesh.position.copy(pBody.position);
        
        let ct = new THREE.Vector3();
        camera.getWorldPosition(ct);
        let tt = new THREE.Vector3();
        tt.subVectors(pMesh.position, ct);
        console.log("SUB VECTOR: ", tt)

        let target = new THREE.Vector3();
        camera.getWorldDirection(target);
        let direction = new CANNON.Vec3(tt.x, tt.y, tt.z);
        let initialVelocity = new CANNON.Vec3();
        direction.scale(this.projectile_speed, initialVelocity);
        
        pBody.userData = { mesh: pMesh, cc: "playerProjectile", createdAt: Date.now(), owner: this.id }
        pBody.velocity.copy(initialVelocity);
        pMesh.userData.body = pBody;
    
        pBody.addEventListener("collide", (e) => {
            console.log(e);
            if(e.body.userData.cc == "onlineEnemyPlayer") { console.log(`player [${this.id}]   ->   player [${e.body.userData.playerID}]`) }
            e.body.userData.createdAt -= 1000;
            e.target.userData.createdAt -= 1000;
        })

        let ps = new PS_trail({parent: pMesh, camera})

        return ({mesh: pMesh, body: pBody, ps, deleteAfter: 3000, isSuper: false});
    }

    createSuper (camera, parryLevel=1) {
        let pGeo = new THREE.SphereGeometry(1);
        let pMat = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
        let pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.userData.parryLevel = parryLevel;
    
        let pShape = new CANNON.Sphere(2);
        let pBody = new CANNON.Body({ shape: pShape, mass: 20, linearDamping: 0.01 });
        
        let sp = new THREE.Vector3();
        this.mesh.children[1].children[0].getWorldPosition(sp);
        pBody.position.set(sp.x, sp.y, sp.z)
        pMesh.position.copy(pBody.position);
        

        let target = new THREE.Vector3();
        camera.getWorldDirection(target);
        let direction = new CANNON.Vec3(target.x, target.y, target.z);
        direction.normalize();
        let initialVelocity = new CANNON.Vec3();
        direction.scale(this.super_speed, initialVelocity);
        
        pBody.userData = { mesh: pMesh, cc: "playerProjectile", createdAt: Date.now(), owner: this.id }
        pBody.velocity.copy(initialVelocity);
    
        pMesh.userData.body = pBody;

        pBody.addEventListener("collide", (e) => {
            console.log(e);
            if(e.body.userData.cc == "onlineEnemyPlayer") { console.log(`player [${this.id}]   ->   player [${e.body.userData.playerID}]`) }
            e.body.userData.createdAt -= 1000;
            e.target.userData.createdAt -= 1000;
          })

        let ps = new PS_fire({parent: pMesh, camera})

        return ({mesh: pMesh, body: pBody, ps, deleteAfter: 5000, isSuper: true});
    }
} 