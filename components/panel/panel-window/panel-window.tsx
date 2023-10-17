"use client";
import { useSession } from "next-auth/react";
import { DetectionsBar } from "../detections-bar/detections-bar";
import { PanelCameras } from "../panel-cameras/panel-cameras";

export const PanelWindow = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>{session?.user?.name}</p>
      {/* <PanelCameras /> */}
      {/* <DetectionsBar /> */}
    </div>
  );
};
