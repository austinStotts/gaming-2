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


        this.move_player = this.move_player.bind(this);
    }



    dodge (direction, distance) {
        // console.log("\ntp type Player dodge: \n", "x",direction.x, "y",direction.y, "z",direction.z);
        let test = new CANNON.Body();
    
        // this.body.position.addScaledVector(distance, direction, this.body.position);
        // this.time_since_last_dodge = Date.now();
        console.log(this.body)
        console.log("\ndash type Player dodge: \n", "x",direction.x, "y",direction.y, "z",direction.z);
        this.body.velocity.addScaledVector(this.dodge_distance, direction, this.body.velocity);
        this.time_since_last_dodge = Date.now();
        // console.log(this.body);
    }

    set_body (body) {
        this.body = body;
    }

    move_player (velocity) {
        // let test = new CANNON.Vec3();
        let captureY = this.body.velocity.y;
        this.body.velocity.addScaledVector(this.acc, velocity, this.body.velocity)
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - this.armor.take_damage(n);
    }
} 