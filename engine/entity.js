export default class Entity {

  constructor({
    width = 0,
    height = 0,
    x = 0,
    y = 0,
    color = "black"
  } = {}) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.offset = {x:0,y:0};
    this.scale = {x:0,y:0};
    this.vx = 0;
    this.vy = 0;
    this.components = [];
  }

  draw(ctx){

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width, this.height);
  }

  /**
   * Set position of the entity
   * @param {[type]} x  [description]
   * @param {[type]} y  [description]
   */
  setPosition(x,y){
    this.x = x;
    this.y = y;
  }

  /**
   * Set the height of the entity
   * @param {[type]} height  [description]
   */
  setHeight(height){
    this.height = height;
  }

  /**
   * Set the width of the entity
   * @param {[type]} width  [description]
   */
  setWidth(width){
    this.width = width;
  }

  /**
   * Set offset
   * @param {[type]} x  [description]
   * @param {[type]} y  [description]
   */
  setOffset(x,y){
    this.offset = {x,y};
  }
  /**
   * Set Scale
   * @param {int} x
   * @param {int} y  if not set its the same as x
   */
  setScale(x,y){
    this.scale = {x,y:y?y:x};
  }


  addComponent(component){
    component.setEntity(this);
    this.components.push(component);
  }


  update(progress){

    for (var i = 0; i < this.components.length; i++) {
      this.components[i].update(progress);
    }
  }

  /**
   * Check for collosion
   * @param  {Entity} entity
   * @return {boolean}
   */
  collidingWith(entity){
    return !(
      entity.x > this.width + this.x ||
      this.x > entity.width + entity.x ||
      entity.y > this.height + this.y ||
      this.y > entity.height + entity.y
    );
  }

  /**
   *
   * @param  {Entity} entity
   * @return {boolean}
   */
  inBounce(entity){
    return (
      this.y > entity.y &&
      entity.y + entity.height > this.y + this.height &&
      this.x > entity.x &&
      entity.x + entity.width > this.x + this.width
    );
  }

}
