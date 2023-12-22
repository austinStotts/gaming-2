import * as THREE from 'three';
import * as CANNON from "cannon-es";
// import createComplexPlayer from "./player_v2";



export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.speed = 0.1;
        this.acc = 20;

        this.hp = 10;

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
        this.shoot_cooldown = 1500;
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

    createProjectile (camera, parryLevel=0) {
        let pGeo = new THREE.SphereGeometry(0.5);
        let pMat = new THREE.MeshBasicMaterial({ color: 0x2196F3 });
        let pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.userData.parryLevel = parryLevel;
    
        let pShape = new CANNON.Sphere(1);
        let pBody = new CANNON.Body({ shape: pShape, mass: 1, linearDamping: 0.05 });
        
        // let s = new THREE.Vector3();
        // camera.getWorldDirection(s);
        // let c = new THREE.Vector3();
        // c.copy(camera.position)
        // console.log("camera position:",c)
        // console.log("camera direction:",s)
        // c.lerp(s, 0.1)
        // console.log("camera with vector:",c)
        console.log(camera.children)
        pBody.position.copy(camera.children[0].position);
        pMesh.position.copy(pBody.position);
        

        let target = new THREE.Vector3();
        camera.getWorldDirection(target);
        let direction = new CANNON.Vec3(target.x, target.y, target.z);
        direction.normalize();
        let initialVelocity = new CANNON.Vec3();
        direction.scale(this.projectile_speed, initialVelocity);
        
        pBody.userData = { mesh: pMesh, cc: "playerProjectile", createdAt: Date.now(), owner: this.id }
        pBody.velocity.copy(initialVelocity);
    
        pBody.addEventListener("collide", (e) => {
            console.log(e);
            if(e.body.userData.cc == "onlineEnemyPlayer") { console.log(`player [${this.id}]   ->   player [${e.body.userData.playerID}]`) }
            e.body.userData.createdAt -= 1000;
            e.target.userData.createdAt -= 1000;
          })

        return ({mesh: pMesh, body: pBody, deleteAfter: 3000});
    }
} 