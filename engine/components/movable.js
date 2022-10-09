import Component from '../component.js';

export default class Movable extends Component{

  update(progress){
     this.entity.x += this.entity.velocity.x;
     this.entity.y += this.entity.velocity.y;
  }

}
