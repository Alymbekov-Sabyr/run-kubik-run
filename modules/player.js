import gameObj from "./game-constructor.js";

let player = new gameObj(
  "player",
  {
    width: 50,
    height: 50,
  },
  {
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    coords: {
      speed: 5,
      x: (375/2)-25,
      y: 547
    },
  }
);

export default player;
