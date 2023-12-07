import * as THREE from 'three';
import * as CANNON from "cannon-es";



export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.speed = 0.1;
        this.acc = 20;

        this.mesh;
        this.body;

        this.jump_multiplier = 1.5;

        this.dodge_distance = 50;
        this.dodge_cooldown = 1000; // 1000
        this.time_since_last_dodge = Date.now();

        this.parry_cooldown = 1000;
        this.time_since_last_parry = 0;
        this.parry_window = 300;
        this.perfect_parry_window = 100;

        this.time_since_last_shoot = Date.now();
        this.shoot_cooldown = 2000;
        this.projectile_speed = 100;

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

    createProjectile (camera) {
        let pGeo = new THREE.SphereGeometry(0.5);
        let pMat = new THREE.MeshBasicMaterial({ color: 0x2196F3 });
        let pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.userData.parryLevel = 0;
    
        let pShape = new CANNON.Sphere(1);
        let pBody = new CANNON.Body({ shape: pShape, mass: 1, linearDamping: 0.05 });
        pBody.position.set(this.body.position.x, this.body.position.y+3, this.body.position.z);
        pMesh.position.copy(pBody.position);

        let target = new THREE.Vector3();
        camera.getWorldDirection(target);
        let direction = new CANNON.Vec3(target.x, target.y, target.z);
        direction.normalize();
        let initialVelocity = new CANNON.Vec3();
        direction.scale(this.projectile_speed, initialVelocity);
    
        pBody.userData = { mesh: pMesh, cc: "playerProjectile", createdAt: Date.now(), owner: this.id }
        pBody.velocity.copy(initialVelocity);
    
        pBody.addEventListener("collide", (e) => {console.log(e); e.body.userData.createdAt -= 1000; e.target.userData.createdAt -= 1000; })

        return ({mesh: pMesh, body: pBody, deleteAfter: 3000});
    }
} 