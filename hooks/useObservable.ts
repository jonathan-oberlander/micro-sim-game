import React from "react";
import { BehaviorSubject, Observable } from "rxjs";

export const useObservable = <T>(observable: Observable<T>) => {
  const [state, setState] = React.useState<T>();

  React.useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);

  return state;
};

export const useSubject = <T>(subject: BehaviorSubject<T>) => {
  const [state, setState] = React.useState<T>();

  React.useEffect(() => {
    const sub = subject.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);

  const service = {
    get: state,
    set: function (v: T) {
      subject.next(v);
    },
  };

  return service;
};
