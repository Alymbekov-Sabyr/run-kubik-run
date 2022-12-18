import player from "./modules/player.js"

let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');

let speed = 5;
let side = "none"

let moving = {
    start: {},
    move: {},
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
    if (moving.move.x>moving.start.x)
        side = "right"
    else 
        side = "left"
    player.move(side);
    // console.log(e);
    // console.log(moving);
    // console.log(side);
    // console.log(e.touches[0].clientX, e.touches[0].clientY);
})

function start() {
    ctx.clearRect(0, 0, 375, 667)
    player.draw(ctx);
    
    requestAnimationFrame(start);
}
start()