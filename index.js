import player from "./modules/player.js"
import generator from "./modules/enemies.js"

let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');

let side = null
let score = 0;
let dif = 1;
let up = 0.1;
let end = "start";

let moving = {
    start: {X: null, y: null},
    move: {X: null, y: null},
}

canv.width = 375
canv.height = 667

// move
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

      player.move(side,dif)
})
let arr = [];
let timer = 1500
setInterval(() => {
    if(timer>900){
        timer-=500*0.09
    }
}, 1500);
setInterval(()=>{
    let gen = Math.floor(Math.random() * (10 - 1) + 1)
    let generated = null
    if (gen === 1||gen===2)
        generated =  generator("triple")
    else if (gen === 3||gen===4)
        generated =  generator("wall")
    else if (gen > 4 && gen < 11){
        generated =  generator("random")
    }
    for (const el of generated) {
        arr.push(el)
    }
}, timer)
setInterval(()=>{
    if (end === "start")
        score++;
},500*dif)
setInterval(()=>{
    dif+=up;
    up+=0.07;
},5000*dif)
// game starter
function start() {
    ctx.clearRect(0, 0, 375, 667)
    player.draw(ctx);
    if (player.data.coords.x<0) {
        player.data.coords.x=1
    } else if (player.data.coords.x>325) {
        player.data.coords.x=324
    }
    if (player.data.coords.y>617) {
        player.data.coords.y=616
    }
    if(arr!=[]) {
        for (const el of arr) {
            if (el.data.coords.x < player.data.coords.x + 50 &&
                el.data.coords.x + 50 > player.data.coords.x &&
                el.data.coords.y < player.data.coords.y + 50 &&
                50 + el.data.coords.y > player.data.coords.y) {
               setTimeout(()=>{
                document.querySelector(".lose").style.display="flex";
               document.querySelector("canvas").style.display="none";
               document.getElementById("score").innerHTML="score: "+score;
               end="end"
               clearInterval()
               },50)
            }
            if (el.data.coords.y>canv.height) {
                arr.splice(arr.indexOf(el),1)
            }
                el.draw(ctx)
            el.move("down",dif)
        }
    }
    ctx.font = "24px serif";
    ctx.fillStyle = "black";
  ctx.fillText(score, 0, 50);
    requestAnimationFrame(start);
}
start();

export {dif}