import Entity from './entity.js';

export default class Sprite extends Entity {

  constructor(properties, {imageUrl, cols = 0, rows = 0, speed = 10,scale = 1, config}) {
    super(properties);

    this.isLoaded = false;

    this.image = new Image;
    this.image.src = imageUrl;
    this.image.onload=() => {
      this.imageWidth = this.image.width / this.cols;
      this.imageHeight = this.image.height / this.rows;
      this.isLoaded = true;
    };

    this.cols = cols;
    this.rows = rows;
    this.speed = speed;
    this.scale = scale;

    this.config = config;
    this.count = 0;
    this.frames = [];
    this.counter = 0;
    this.once = false;
    this.name = null;
  }

  setSprite(name) {
    if(this.config[name] && name != this.name){
      this.name = name;
      this.count = 0;
      this.counter = 0;
      this.frames = this.config[name].frames;
      this.once = this.config[name].once || false;
    }
  }

  draw(ctx) {

    if(!this.isLoaded) return;

    ctx.drawImage(
      this.image,
      this.frames[this.count][0]*this.imageWidth,
      this.frames[this.count][1]*this.imageHeight,
      this.imageWidth,
      this.imageHeight,
      this.x,
      this.y,
      this.width*this.scale,
      this.height*this.scale
    );

    this.counter++;

    if((this.counter % this.speed) == 0){
      this.count++;
      if(!(this.count < this.frames.length)){
          if(!this.once){
            this.count = 0;
          }
          this.counter = 0;
      }
    }
  }
}
