"use client";
import { ChangeEvent, FormEventHandler, useReducer } from "react";
import { Button } from "../../(shared)/button";
import { reducer } from "./reducers";
import { ActionTypes } from "./types";
import { useAuthServiceContext } from "@/services/auth-service/auth-service-LEGACY";
import { Input } from "@/components/(shared)/input";
import Image from "next/image";
import { signIn } from "next-auth/react";

export const LogInWindow = () => {
  // const { logIn } = useAuthServiceContext();
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
    // logIn({ username, password });
    signIn("credentials", { username, password, callbackUrl: "/panel" }).then(
      () => alert("loggin...")
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="username-input" className="flex">
        <span className="sr-only">Username</span>
        <Image src="/icons/user.png" alt="Username" width={32} height={32} />
        <Input
          id="username-input"
          onChange={handleOnChangeForm(ActionTypes.USERNAME)}
          value={username}
        />
      </label>
      <label htmlFor="passw-input" className="flex">
        <span className="sr-only">Password</span>
        <Image src="/icons/padlock.png" alt="Password" width={32} height={32} />
        <Input
          autoComplete="current-password"
          type="password"
          id="passw-input"
          onChange={handleOnChangeForm(ActionTypes.PASSWORD)}
          value={password}
        />
      </label>
      <Button type="submit">Log in</Button>
    </form>
  );
};
