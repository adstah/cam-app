import { PanelWindow } from "@/components/panel/panel-window/panel-window";
import { DetectionsBar } from "@/components/panel/detections-bar/detections-bar";
import { PanelCameras } from "@/components/panel/panel-cameras/panel-cameras";

const Page = async () => {
  return (
    <div>
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
