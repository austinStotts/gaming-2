import * as THREE from 'three';
import * as CANNON from "cannon-es";



export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.maxHP = 100;
        this.hp = this.maxHP;
        this.armor = undefined;
        this.speed = 5;
        this.acc = 0.5;
        this.dec = 0.2;
        this.groundHeight = 0.25;
        this.inventory = [];
        this.mesh;
        this.body;
        this.dmg_multiplier = 1;
        this.speed_multiplier = 1;
        this.jump_multiplier = 1;

        this.dodge_distance = 10;
        this.dodge_cooldown = 400; // 1000
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
        this.body.velocity.addScaledVector(100, direction, this.body.velocity);
        this.time_since_last_dodge = Date.now();
        // console.log(this.body);
    }

    set_body (body) {
        this.body = body;
    }

    move_player (velocity) {
        // let test = new CANNON.Vec3();
        // test.vsub()
        let captureY = this.body.velocity.y;
        // velocity.vsub(this.speed);
        // this.body.velocity.set((velocity.x*this.speed),(velocity.y*this.speed),(velocity.z*this.speed))
        this.body.velocity.addScaledVector(this.speed, velocity, this.body.velocity)
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - this.armor.take_damage(n);
    }
} 