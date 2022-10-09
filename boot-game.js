import Entity from './engine/entity.js';

import Scene from './engine/scene.js';
import Layer from './engine/layer.js';
import Game from './engine/game.js';

import Movable from './engine/components/movable.js';
import Boundary from './engine/components/boundary.js';
import Gravity from './engine/components/gravity.js';

import Player from './player/player.js';
import LevelOne from './world/level-one.js';


window.addEventListener('load', () => {

  let width = window.innerWidth;
  let height = window.innerHeight;

  let player = new Player(width,height);
  // let b = new AnimatedSprite({
  //   width:50,
  //   height:50,
  //   x:100,
  //   y:200
  // }, {
  //   imageUrl:'assets/hyptosis_tile-art-batch-1.png',
  //   cols:30,
  //   rows:30,
  //   config:{
  //     test: { frames: [[10,10]]}
  //   }
  // });
  // b.setSprite('test');

  let game = new Game({width,height});
  let layer = new Layer(game);
  layer.addEntity(player);
  // layer.addEntity(b)
  let scene = new Scene();
  scene.addLayer(layer);
  game.addScene('main',scene);
  game.setScene('main');

  game.start();

})
