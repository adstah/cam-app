import { PanelWindow } from "@/components/panel/panel-window/panel-window";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session && <p>{session.user?.name}</p>}
      <PanelWindow />
    </div>
  );
};

export default Page;
