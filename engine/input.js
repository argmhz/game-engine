export class Keys {

  constructor(keys){

    for (let i in keys) {
      this[i] = keys[i];
    }

    window.addEventListener('keydown',(e) => this.keyUp(e));
    window.addEventListener('keyup',(e) => this.keyDown(e));
  }

  keyUp(e){
    if(this.hasOwnProperty(e.code)){
      this[e.code] = true;
    }
  }

  keyDown(e){
    if(this.hasOwnProperty(e.code)){
      this[e.code] = false;
    }
  }

}
