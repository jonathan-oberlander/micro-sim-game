import { timer, scheduled, queueScheduler, from, BehaviorSubject } from "rxjs";
import {
  take,
  map,
  concatAll,
  scan,
  switchMap,
  catchError,
} from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { apiData$, state$, stateFunctions } from "./state";
import { gameData, IData } from "../api/gameData";
import { stat } from "fs";

export interface ITimeLine {
  clock: number;
  display: string;
}

export const timelineInit: ITimeLine = {
  clock: 0,
  display: "0:00",
};

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

///// API CALL

const apiStream$ = ajax("https://jsonplaceholder.typicode.com/todos/");

export const v$ = new BehaviorSubject<boolean>(false);

// try to remove game data
export const call$ = v$.pipe(
  map((v) => {
    // stateFunctions.reset();
    // apiData$.next({} as IData);
    apiData$.next(gameData);
    return v;
  }),
  switchMap((x) => (x ? apiStream$ : from([{} as AjaxResponse]))),

  catchError((error) => {
    stateFunctions.error(error);
    return from([error]);
  })
);

// CREATE THE WHOLE PROGRESS ON EVENTS HERE
export const flow$ = call$.pipe(
  // map((r) => {
  //   console.log(r);
  //   apiData$.next(gameData);
  //   return r;
  // }),
  switchMap((r) => {
    if (r.status === 200) {
      stateFunctions.success();
      return timeline$;
    } else {
      return from([timelineInit]);
    }
  })
);
