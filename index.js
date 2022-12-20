import player from "./modules/player.js"

let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');

let side = null

let moving = {
    start: {X: null, y: null},
    move: {X: null, y: null},
}

canv.width = 375
canv.height = 667

canv.addEventListener("touchstart",(e)=>{
    moving.start.x = 375 * ((e.touches[0].clientX-e.target.offsetLeft)/canv.offsetWidth);
    moving.start.y = 667 * ((e.touches[0].clientY-e.target.offsetTop)/canv.offsetHeight);
})
canv.addEventListener("touchmove",(e)=>{
    moving.move.x = 375 * ((e.touches[0].clientX-e.target.offsetLeft)/canv.offsetWidth);
    moving.move.y = 667 * ((e.touches[0].clientY-e.target.offsetTop)/canv.offsetHeight);

    if (moving.start.x === null) {
        return;
      }
     
      if (moving.start.y === null) {
        return;
      }

    let diffX = moving.start.x - moving.move.x;
    let diffY = moving.start.y - moving.move.y;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          side = "left"
        } else {
            side = "right"
        }  
      } else {
        if (diffY > 0) {
          side = "top"
        } else {
          side = "down"
        }  
      }

      player.move(side)
})

function start() {
    ctx.clearRect(0, 0, 375, 667)
    player.draw(ctx);
    
    requestAnimationFrame(start);
}
start();