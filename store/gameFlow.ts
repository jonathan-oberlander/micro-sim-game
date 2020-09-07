import { from, queueScheduler, scheduled } from "rxjs";
import { mergeMap, map, mergeAll, scan, distinct } from "rxjs/operators";
import { IGame } from "../api/gameData";
import { flow$ } from "./timelineFlow";

const initGameData = {
  score: "0-0",
  event: "",
};

export const goalOnTime$ = (game: IGame) =>
  flow$.pipe(
    mergeMap(({ clock }) =>
      from([game.sim]).pipe(
        mergeMap((sim) =>
          sim.map(({ time, score }) => {
            if (time === clock) {
              return {
                score,
              };
            }
          })
        )
      )
    ),
    distinct()
  );

export const events$ = (game: IGame) =>
  flow$.pipe(
    mergeMap(({ clock }) =>
      from([game]).pipe(
        map((g) => {
          switch (clock) {
            case 1:
              return {
                ...initGameData,
              };
            case 45:
              return {
                event: g.ht,
              };
            case 90:
              return {
                event: g.ft,
              };
          }
        })
      )
    ),
    distinct()
  );

export const gameFlow$ = (g: IGame) =>
  scheduled([goalOnTime$(g), events$(g)], queueScheduler).pipe(
    mergeAll(),
    scan((acc, curr) => Object.assign({}, acc, curr), initGameData)
  );
