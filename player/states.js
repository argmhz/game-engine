import State from '../engine/state.js';
import {States} from './config.js';

export class IdleRight extends State {
  enter(){
    this.entity.setSprite(States.IDLE_RIGHT);
    this.entity.vx = 0;
  }
  update(){
    if(this.entity.keys.ArrowLeft) this.entity.setState(States.IDLE_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.setState(States.RUN_RIGHT);
    else if(this.entity.keys.ArrowUp) this.entity.setState(States.JUMP_RIGHT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.SIT_RIGHT);
  }
}

export class IdleLeft extends State {
  enter(){
    this.entity.setSprite(States.IDLE_LEFT);
    this.entity.vx = 0;
  }
  update(){
    if(this.entity.keys.ArrowRight) this.entity.setState(States.IDLE_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.setState(States.RUN_LEFT);
    else if(this.entity.keys.ArrowUp) this.entity.setState(States.JUMP_LEFT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.SIT_LEFT);
  }
}

export class RunRight extends State {
  enter(){
    this.entity.setSprite(States.RUN_RIGHT);
    this.entity.vx = this.entity.maxSpeed;
  }
  update(){
    if(!this.entity.keys.ArrowRight) this.entity.setState(States.IDLE_RIGHT);
    else if(this.entity.keys.ArrowUp) this.entity.setState(States.JUMP_RIGHT);

  }
}

export class RunLeft extends State {
  enter(){
    this.entity.setSprite(States.RUN_LEFT);
    this.entity.vx = -this.entity.maxSpeed;
  }

  update(){
    if(!this.entity.keys.ArrowLeft) this.entity.setState(States.IDLE_LEFT);
    else if(this.entity.keys.ArrowUp) this.entity.setState(States.JUMP_LEFT);
  }
}

export class JumpRight extends State {
  enter(){
    this.entity.setSprite(States.JUMP_RIGHT);
    if(this.entity.isGounded()){
      this.entity.vy += this.entity.jumpSpeed;
    }
  }

  update(){
    if(this.entity.vy == 0 && !this.entity.isGounded()) this.entity.setState(States.FALL_RIGHT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.ROLL_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.setState(States.JUMP_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.vx = this.entity.maxSpeed;
  }
}

export class JumpLeft extends State {
  enter(){
    this.entity.setSprite(States.JUMP_LEFT);
    if(this.entity.isGounded()){
      this.entity.vy += this.entity.jumpSpeed;
    }
  }

  update(){
    if(this.entity.vy == 0 && !this.entity.isGounded()) this.entity.setState(States.FALL_LEFT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.ROLL_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.setState(States.JUMP_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.vx = -this.entity.maxSpeed;
  }
}

export class FallRight extends State {
  enter(){
    this.entity.setSprite(States.FALL_RIGHT);
  }

  update(){
    if(this.entity.isGounded()) this.entity.setState(States.IDLE_RIGHT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.ROLL_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.setState(States.FALL_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.vx = this.entity.maxSpeed;
  }
}

export class FallLeft extends State {
  enter(){
    this.entity.setSprite(States.FALL_LEFT);
  }

  update(){
    if(this.entity.isGounded()) this.entity.setState(States.IDLE_LEFT);
    else if(this.entity.keys.ArrowDown) this.entity.setState(States.ROLL_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.setState(States.FALL_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.vx = -this.entity.maxSpeed;
  }
}

export class SitRight extends State {
  enter(){
    this.entity.setSprite(States.SIT_RIGHT);
  }

  update(){
    if(!this.entity.keys.ArrowDown) this.entity.setState(States.IDLE_RIGHT);
    else if(this.entity.keys.ArrowLeft) this.entity.setState(States.SIT_LEFT);
  }
}

export class SitLeft extends State {
  enter(){
    this.entity.setSprite(States.SIT_LEFT);
  }

  update(){
    if(!this.entity.keys.ArrowDown) this.entity.setState(States.IDLE_LEFT);
    else if(this.entity.keys.ArrowRight) this.entity.setState(States.SIT_RIGHT);
  }
}

export class RollRight extends State {
  enter(){
    this.entity.setSprite(States.ROLL_RIGHT);
  }

  update(){
    if(this.entity.isGounded()) this.entity.setState(States.IDLE_RIGHT);
    else if(!this.entity.keys.ArrowDown) this.entity.setState(States.FALL_RIGHT);
    else if(this.entity.keys.ArrowRight) this.entity.vx = this.entity.maxSpeed;
    else if(this.entity.keys.ArrowLeft) this.entity.setState(States.ROLL_LEFT);
  }
}

export class RollLeft extends State {
  enter(){
    this.entity.setSprite(States.ROLL_LEFT);

  }

  update(){
    if(this.entity.isGounded()) this.entity.setState(States.IDLE_LEFT);
    else if(!this.entity.keys.ArrowDown) this.entity.setState(States.FALL_LEFT);
    else if(this.entity.keys.ArrowLeft) this.entity.vx = -this.entity.maxSpeed;
    else if(this.entity.keys.ArrowRight) this.entity.setState(States.ROLL_RIGHT);
  }
}
