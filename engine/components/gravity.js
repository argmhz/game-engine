import Component from '../component.js';

export default class Gravity extends Component{
  constructor(gravity) {
    super();
    this.gravity = gravity;
  }

  update(progress){
    if(!this.entity.boundBottom)
    this.entity.y += this.gravity;
  }
}
