import { BehaviorSubject, from, fromEvent } from "rxjs";
import { IData } from "../api/gameData";

//////////////////////// ATOMIC STATES ////////////////////////

export const apiState$ = new BehaviorSubject<IData>({} as IData);
export const playGame$ = new BehaviorSubject<boolean>(false);
export const counterState$ = new BehaviorSubject<number>(0);

//////////////////////// GLOBAL STATE 1 ////////////////////////

type TState = typeof initialState;
const initialState = {
  error: "",
  loading: true,
};

export const globalState1$ = new BehaviorSubject<Partial<TState>>(initialState);

let state = initialState;
const nextState = (newState: TState) => {
  state = newState;
  globalState1$.next(state);
};

// UPDATE STATE FUNCTIONS

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
