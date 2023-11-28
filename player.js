import * as THREE from 'three';
import * as CANNON from "cannon-es";



export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.maxHP = 100;
        this.hp = this.maxHP;
        this.armor = undefined;
        this.speed = 100;
        this.acc = 0.25;
        this.dec = 0.2;
        this.groundHeight = 0.25;
        this.inventory = [];
        this.mesh;
        this.body;
        this.dmg_multiplier = 1;
        this.speed_multiplier = 1;
        this.jump_multiplier = 1;

        this.dodge_distance = 2;
        this.dodge_cooldown = 1000;
        this.time_since_last_dodge = Date.now();

        this.move_player = this.move_player.bind(this);
    }



    dodge (direction) {
        console.log("dodge!");
        this.time_since_last_dodge = Date.now()
    }

    set_body (body) {
        this.body = body;
    }

    move_player (velocity) {
        let test = new CANNON.Vec3();
        // test.vsub()
        let captureY = this.body.velocity.y;
        // velocity.vsub(this.speed);
        this.body.velocity.set((velocity.x*this.speed),(velocity.y*this.speed),(velocity.z*this.speed))
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - this.armor.take_damage(n);
    }
} 