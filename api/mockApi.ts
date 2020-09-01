import { gameData } from "./gameData";

export const apiCall = () =>
  new Promise((resolve, reject) => {
    Math.random() > 0.33
      ? setTimeout(() => resolve(gameData), 1000)
      : setTimeout(() => reject("Whoops!"), 1000);
  });
