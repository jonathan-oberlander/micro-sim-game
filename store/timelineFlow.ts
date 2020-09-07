import { timer, scheduled, queueScheduler, from, BehaviorSubject } from "rxjs";
import {
  take,
  map,
  concatAll,
  scan,
  switchMap,
  catchError,
} from "rxjs/operators";
import { AjaxResponse } from "rxjs/ajax";
import { apiState$, playGame$, stateFunctions } from "./applicationState";
import { gameData } from "../api/gameData";
import { apiCall$ } from "../api/api";

export interface ITimeLine {
  clock: number;
  display: string;
}

export const timelineInit: ITimeLine = {
  clock: 0,
  display: "0:00",
};

const period = (dt: number, pd: number, off: number, dur: number) =>
  timer(dt, pd).pipe(
    take(dur),
    map((i) => ({
      clock: i + 1 + off,
      display: formatClock(i + 1 + off),
    }))
  );

export const timeline$ = scheduled(
  [period(0, 100, 0, 45), period(1000, 100, 45, 45)],
  queueScheduler
).pipe(
  concatAll(),
  scan((acc, curr) => Object.assign({}, acc, curr), timelineInit)
);

export const startGame$ = playGame$.pipe(
  switchMap((x) => (x ? apiCall$ : from([{} as AjaxResponse])))
);

// CREATE THE WHOLE PROGRESS ON EVENTS HERE
export const flow$ = startGame$.pipe(
  switchMap((r) => {
    if (r.status === 200) {
      stateFunctions.success();
      return timeline$;
    } else {
      return from([timelineInit]);
    }
  })
);

//////////////////////// HELPER FUNCTIONS ////////////////////////

const formatClock = (clock: number): string => {
  if (clock === 45) {
    return "HALFTIME";
  }
  if (clock === 90) {
    return "FULLTIME";
  }
  const out = Math.max(0, Math.min(clock, 90)); // 0 < out > 90
  return `${out}:00`;
};
