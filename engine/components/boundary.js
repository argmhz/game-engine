import Component from '../component.js';

export default class Boundary extends Component{
  constructor(entity) {
    super();
    this.secEntity = entity;
  }

  update(progress){

    this.entity.boundTop = false;
    this.entity.boundBottom = false;
    this.entity.boundLeft = false;
    this.entity.boundRight = false;

    if(!this.entity.inBounce(this.secEntity)){
      if(this.entity.x < this.secEntity.x){
        this.entity.boundLeft = true;
        this.entity.x = this.secEntity.x;
      }
      if(this.entity.x > this.secEntity.width - this.entity.width){
        this.entity.boundRight = true;
        this.entity.x = this.secEntity.width - this.entity.width;
      }
      if(this.entity.y < this.secEntity.y){
        this.entity.boundTop = false;
        this.entity.y = this.secEntity.y;
      }
      if(this.entity.y > this.secEntity.height - this.entity.height){
        this.entity.y = this.secEntity.height - this.entity.height;
        this.entity.boundBottom = true;
      }
    }
  }
}
