"use client";
import { ChangeEvent, FormEventHandler, useReducer } from "react";
import { Button } from "../../(shared)/button";
import { reducer } from "./reducers";
import { ActionTypes } from "./types";
import { useAuthServiceContext } from "@/services/auth-service/auth.service";

export const LogInWindow = () => {
  const { logIn } = useAuthServiceContext();
  const [{ username, password }, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
  });

  const handleOnChangeForm =
    (type: ActionTypes) =>
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      dispatch({ payload: target.value, type });
    };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    logIn({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container w-80 border-secondary"
      style={{ maxWidth: 400 }}
    >
      <div className="form-group row">
        <label htmlFor="username-input">Username</label>
        <input
          className="form-control"
          id="username-input"
          onChange={handleOnChangeForm(ActionTypes.USERNAME)}
          value={username}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="passw-input">Password</label>
        <input
          className="form-control"
          autoComplete="current-password"
          type="password"
          id="passw-input"
          onChange={handleOnChangeForm(ActionTypes.PASSWORD)}
          value={password}
        />
      </div>
      <Button type="submit">Log in</Button>
    </form>
  );
};
