export enum ActionTypes {
  PASSWORD = "PASSWORD",
  USERNAME = "USERNAME",
}

export type State = {
  username: string;
  password: string;
};

export type Action = {
  type: ActionTypes;
  payload: string;
};
