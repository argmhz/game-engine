export const SpriteConfig  = {
  idleRight:{ frames:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]] },
  idleLeft: { frames:[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1]] },
  runRight: { frames:[[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]] },
  runLeft:  { frames:[[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]] },
  jumpRight:{ frames:[[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]] },
  jumpLeft: { frames:[[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3]] },
  fallRight:{ frames:[[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4]] },
  fallLeft: { frames:[[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]] },
  sitRight: { frames:[[0,8],[1,8],[2,8],[3,8],[4,8]] },
  sitLeft:  { frames:[[0,9],[1,9],[2,9],[3,9],[4,9]] },
  rollRight:{ frames:[[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10]] },
  rollLeft: { frames:[[0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11]] }
};

export const States = {
  IDLE_RIGHT:'idleRight',
  IDLE_LEFT:'idleLeft',
  JUMP_RIGHT:'jumpRight',
  JUMP_LEFT: 'jumpLeft',
  FALL_RIGHT:'fallRight',
  FALL_LEFT:'fallLeft',
  RUN_RIGHT:'runRight',
  RUN_LEFT: 'runLeft',
  SIT_RIGHT: 'sitRight',
  SIT_LEFT:'sitLeft',
  ROLL_RIGHT:'rollRight',
  ROLL_LEFT: 'rollLeft'
}
