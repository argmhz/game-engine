import Entity from '../engine/entity.js';
import {Keys} from '../engine/input.js';
import Sprite from '../engine/sprite.js';
import Gravity from '../engine/components/gravity.js';
import {SpriteConfig,States} from './config.js';
import {
  IdleRight,IdleLeft,
  RunRight,RunLeft,
  JumpRight,JumpLeft,
  FallRight, FallLeft,
  SitRight,SitLeft,
  RollRight, RollLeft
} from './states.js';

export default class Player extends Sprite {

  constructor(gameWidht,gameHeight){
    super({
      width:200,
      height:200,
      y:gameHeight - 200
    },{
      imageUrl:'../assets/dog_left_right_white.png',
      cols:9,
      rows:12,
      speed:4,
      config:SpriteConfig
    });

    this.gameWidht = gameWidht;
    this.gameHeight = gameHeight;

    this.maxSpeed = 20;
    this.jumpSpeed = -30;
    this.gravity = 1;

    this.keys = new Keys({
      ArrowUp:false,
      ArrowDown:false,
      ArrowLeft:false,
      ArrowRight:false
    });

    this.states = {};
    this.states[States.IDLE_RIGHT] = new IdleRight(this);
    this.states[States.IDLE_LEFT] = new IdleLeft(this);
    this.states[States.RUN_RIGHT] = new RunRight(this);
    this.states[States.RUN_LEFT] = new RunLeft(this);
    this.states[States.JUMP_RIGHT] = new JumpRight(this);
    this.states[States.JUMP_LEFT] = new JumpLeft(this);
    this.states[States.FALL_RIGHT] = new FallRight(this);
    this.states[States.FALL_LEFT] = new FallLeft(this);
    this.states[States.SIT_RIGHT] = new SitRight(this);
    this.states[States.SIT_LEFT] = new SitLeft(this);
    this.states[States.ROLL_RIGHT] = new RollRight(this);
    this.states[States.ROLL_LEFT] = new RollLeft(this);
    this.setState(States.IDLE_RIGHT);

  }

  setState(state){
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  isGounded(){

    if(this.y == this.gameHeight - this.height){
      return true;
    }

    return false;
  }

  update(progress){
    if(!this.isGounded()){
      this.vy += this.gravity;
    }
    else {
      this.vy = 0;
    }

    this.currentState.update();
    this.x += this.vx;
    this.y += this.vy;
  }
}
