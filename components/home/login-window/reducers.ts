import { Action, ActionTypes, State } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.USERNAME: {
      return { ...state, username: action.payload };
    }
    case ActionTypes.PASSWORD: {
      return { ...state, password: action.payload };
    }
  }
};
