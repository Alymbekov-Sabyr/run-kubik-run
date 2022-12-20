import gameObj from "./game-constructor.js";

function generator(count) {
    let enemy_def = []
    for (let i = 1; i <= count; i++) {
        enemy_def.push(new gameObj(
            "enemy_default",
            {
              width: 50,
              height: 50,
            },
            {
              color: "#" + Math.floor(Math.random() * 16777215).toString(16),
              coords: {
                speedX: 4,
                speedY: 6,
                x: Math.floor(Math.random() * (305 - 40) + 40)+20,
                y: 0
              },
            }
          ));
    }
    return enemy_def
}
  
  export default generator;