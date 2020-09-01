import { BehaviorSubject, from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { IData } from "../api/gameData";
import { timeline$, timelineInit } from "./timeline";

//////////////////////// STATE ////////////////////////

const initialState = {
  error: "",
  loading: true,
};

type TState = typeof initialState;

export const state$ = new BehaviorSubject<Partial<TState>>(initialState);
export const go$ = new BehaviorSubject<boolean>(false);
export const flow$ = go$.pipe(
  switchMap((x) => (x ? timeline$ : from([timelineInit])))
);
export const apiData$ = new BehaviorSubject<IData>({} as IData);

let state = initialState;
const nextState = (newState: TState) => {
  state = newState;
  state$.next(state);
};

//////////////////////// REDUCERS ////////////////////////

const reset = () =>
  nextState({
    ...initialState,
  });

const error = (error: string) =>
  nextState({
    ...state,
    loading: false,
    error: error,
  });

const success = () =>
  nextState({
    ...state,
    loading: false,
  });

export const reducers = {
  reset,
  error,
  success,
};
