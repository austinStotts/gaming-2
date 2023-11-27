import * as THREE from 'three';
import * as CANNON from "cannon-es";



export default class Player {
    constructor(id) {
        this.class = "player"
        this.id = id;
        this.maxHP = 100;
        this.hp = this.maxHP;
        this.armor = undefined;
        this.speed = 60;
        this.acc = 0.25;
        this.dec = 0.2;
        this.groundHeight = 0.25;
        this.inventory = [];
        this.mesh;
        this.body;
        this.dmg_multiplier = 1;
        this.speed_multiplier = 1;
        this.jump_multiplier = 1;
    }



    change_weapon (weapon) {
        this.weapon = weapon;
    }

    set_body (body) {
        this.body = body;
    }

    move_player (velocity) {
        let captureY = this.body.velocity.y;
        velocity.dot(this.speed, this.body.velocity);
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - this.armor.take_damage(n);
    }
} 