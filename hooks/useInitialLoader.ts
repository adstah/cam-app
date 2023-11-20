import { useEffect, useReducer, useState } from "react";

export enum LoadingState {
  IDLE,
  LOADING,
  ERROR,
  FULFILLED,
}

export enum LoadingAction {
  START,
  REJECT,
  FULFILL,
}

const reducer = (
  state: LoadingState,
  { payload, type }: { payload?: LoadingState; type: LoadingAction }
) => {
  switch (type) {
    case LoadingAction.START:
      return LoadingState.LOADING;
    case LoadingAction.FULFILL:
      return LoadingState.FULFILLED;
    case LoadingAction.REJECT:
      return LoadingState.ERROR;
    default:
      return LoadingState.IDLE;
  }
};

interface UseLoaderI {
  fnPromise?: Promise<any>;
  deps: any[];
}

export const useInitialLoader = ({ fnPromise, deps }: UseLoaderI) => {
  const [loadingState, dispatch] = useReducer(reducer, LoadingState.IDLE);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    dispatch({ type: LoadingAction.START });
    if (fnPromise) {
      fnPromise
        .then((fetchData) => {
          dispatch({ type: LoadingAction.FULFILL });
          setData(fetchData);
        })
        .catch(() => {
          dispatch({ type: LoadingAction.REJECT });
        });
    }
  }, deps);

  return { loadingState, data, dispatch };
};
