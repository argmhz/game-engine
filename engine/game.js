
export default class Game {

  constructor({width = 0,height = 0} = {}){

    this.width = width;
    this.height = height;
    this.scenes = {};
    this.currentScene = null;
  }

  addScene(name,scene){
    this.scenes[name] = scene;
    this.scenes[name].setGame(this);
  }

  setScene(name){

    if(this.currentScene && this.scenes[name] !== this.currentScene){
      this.currentScene.unload();
    }

    if(this.scenes[name]){
      this.currentScene = this.scenes[name];
      this.currentScene.load();
    }
  }

  getCurrentScene(){
    return this.currentScene;
  }

  update(progress){}

  loop(timestamp) {

    this.update(timestamp);
    this.getCurrentScene().clear();
    this.getCurrentScene().update(timestamp);
    this.getCurrentScene().draw(); 

    window.requestAnimationFrame((e) => this.loop(e))
  }

  start(){
      window.requestAnimationFrame((e) => this.loop(e));
  }

}
