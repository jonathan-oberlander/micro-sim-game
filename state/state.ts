import { BehaviorSubject, from, fromEvent } from "rxjs";
import { IData } from "../api/gameData";

//////////////////////// BEHAVIOR SUBJECTS ////////////////////////

export const counter$ = new BehaviorSubject<number>(0);
export const apiData$ = new BehaviorSubject<IData>({} as IData);

//////////////////////// GLOBAL STATE ////////////////////////

const initialState = {
  error: "",
  loading: true,
};

type TState = typeof initialState;

export const state$ = new BehaviorSubject<Partial<TState>>(initialState);
let state = initialState;
const nextState = (newState: TState) => {
  state = newState;
  state$.next(state);
};

//////////////////////// STATE REDUCERS ////////////////////////

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

export const stateFunctions = {
  reset,
  error,
  success,
};
