// "use client";
import { useNavbarContext } from "./navbar-context";
import { useSession } from "next-auth/react";

export const NavbarHead = async () => {
  const { data: user } = useSession();
  // const { setIsNavbarSideOpen } = useNavbarContext();

  // const handleToggleNavbarSide = () => {
  //   setIsNavbarSideOpen((open) => !open);
  // };

  return (
    <div className="flex justify-end">
      <nav className="bg-slate-700 p-4 mb-2 rounded-bl-lg shadow-sm shadow-slate-600">
        {/* <p className="text-slate-300">{`🚹${user?.user?.name}`}</p> */}
        <button
          // onClick={handleToggleNavbarSide}
          className="border-b-2 border-slate-700 hover:border-b-slate-100"
        >
          {"<- Options"}
        </button>
      </nav>
    </div>
  );
};
