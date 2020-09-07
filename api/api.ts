import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { apiState$, stateFunctions } from "../store/applicationState";
import { gameData } from "./gameData";

export const apiCall$ = ajax(
  "https://jsonplaceholder.typicode.com/todos/"
).pipe(
  map((v) => {
    apiState$.next(gameData);
    return v;
  }),
  catchError((error) => {
    stateFunctions.error(error);
    return from([error]);
  })
);
