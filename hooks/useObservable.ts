import React from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(observable: Observable<T>) => {
  const [state, setState] = React.useState<T>();

  React.useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);

  return state;
};
