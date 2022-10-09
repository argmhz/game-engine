export default class Scene {
  constructor({ layers = []} = {}) {
    this.game = null;
    this.layers = [];
  }

  load(){
    for (var i = 0; i < this.layers.length; i++) {
      this.layers[i].load();
    }
  }

  unload(){
    for (var i = 0; i < this.layers.length; i++) {
      this.layers[i].unload();
    }
  }

  setGame(game) {
    this.game = game;
  }

  getGame(){
    return this.game;
  }

  addLayer(layer) {
    this.layers.push(layer);
  }

  clear(){
    for(let i = 0; i<this.layers.length; i++){
      this.layers[i].clear();
    }
  }

  update(progress){
    for(let i = 0; i<this.layers.length; i++){
      this.layers[i].update(progress);
    }
  }

  draw(){
    for(let i = 0; i<this.layers.length; i++){
      this.layers[i].draw();
    }
  }

}
