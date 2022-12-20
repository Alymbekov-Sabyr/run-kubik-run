import gameObj from "./game-constructor.js";

function generator(com) {
    let enemy_def = [];
    if (com === "triple") {
        for (let i = 0; i < 3; i++) {
            enemy_def.push(new gameObj(
                "enemy_default",
                {
                  width: 50,
                  height: 50,
                },
                {
                  color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                  coords: {
                    speedX: 3,
                    speedY: 4,
                    x: 0+(163*i),
                    y: 0
                  },
                }
              ));
        }
    } else if (com === "wall") {
      for (let i = 0; i < 4; i++) {
          enemy_def.push(new gameObj(
              "enemy_default",
              {
                width: 50,
                height: 50,
              },
              {
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                coords: {
                  speedX: 3,
                  speedY: 4,
                  x: 100+(50*i),
                  y: 0
                },
              }
            ));
      }
  } else if (com==="random") {
    for (let i = 0; i < Math.floor(Math.random() * (5 - 3) + 3); i++) {
      let spawn = Math.floor(Math.random() * (325 - 25) + 25)
      for (const el of enemy_def) {
        if (el.data.coords.x < spawn + 50 &&
          el.data.coords.x + 50 > spawn &&
          el.data.coords.y < 0 + 50 &&
          50 + el.data.coords.y > 0) {
            return generator("random")
        }
      }
      enemy_def.push(new gameObj(
          "enemy_default",
          {
            width: 50,
            height: 50,
          },
          {
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            coords: {
              speedX: 3,
              speedY: 4,
              x: spawn,
              y: 0
            },
          }
        ));
  }
  }
    return enemy_def
}
  
  export default generator;