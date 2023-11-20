"use client";
import { useSession } from "next-auth/react";

interface NavbarHeadI {
  handleToggleNav: () => void;
}

export const NavbarHead = ({ handleToggleNav }: NavbarHeadI) => {
  const { data: user } = useSession();

  return (
    <div className="flex justify-end absolute -translate-x-full shadow">
      <div className="bg-slate-700 p-4 mb-2 rounded-bl-lg shadow-sm shadow-slate-600">
        <button
          onClick={handleToggleNav}
          className="border-b-2 border-slate-700 hover:border-b-slate-100"
        >
          {"<-"}
        </button>
      </div>
    </div>
  );
};
