"use client";
import { useSession } from "next-auth/react";

interface PanelWindowI {
  children: React.ReactElement;
}

export const PanelWindow = ({ children }: PanelWindowI) => {
  const { data: session } = useSession();
  return (
    <div>
      <p>{session?.user?.name}</p>
      {children}
    </div>
  );
};
