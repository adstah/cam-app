import { DetectionsBar } from "../detections-bar/detections-bar";
import { PanelCameras } from "../panel-cameras/panel-cameras";

export const PanelWindow = () => {
  return (
    <div>
      <PanelCameras />
      <DetectionsBar />
    </div>
  );
};
