import { PanelWindow } from "@/components/panel/panel-window/panel-window";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DetectionsBar } from "@/components/panel/detections-bar/detections-bar";
import { PanelCameras } from "@/components/panel/panel-cameras/panel-cameras";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session && <p>{session.user?.name}</p>}
      <PanelWindow>
        <>
          <PanelCameras />
          <DetectionsBar />
        </>
      </PanelWindow>
    </div>
  );
};

export default Page;
