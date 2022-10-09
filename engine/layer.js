export default class Layer {
  constructor(game) {
    this.game = game;
    this.entities = [];

    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.height = this.game.height;
    this.canvas.width = this.game.width;
    this.canvas.style.position = "absolute";
  }

  load(){
    document.body.append(this.canvas);
  }

  unload(){
    this.canvas.remove();
  }

  update(progress){
    for (var i = 0; i < this.entities.length; i++) {
      this.entities[i].update(progress)
    }
  }

  clear(){
    this.context.clearRect(0,0,this.game.width, this.game.height);
  }

  draw(){
    for (var i = 0; i < this.entities.length; i++) {
      this.entities[i].draw(this.context);
    }
  }

  addEntity(entity){
    this.entities.push(entity);
  }

  removeEntity(entity){

  }

  getEntities(){
    return this.entities;
  }

}
