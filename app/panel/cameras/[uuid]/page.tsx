import { ActionButtons } from "@/components/panel/panel-camera-views/action-buttons";
import { PanelCameraViews } from "@/components/panel/panel-camera-views/panel-camera-views";

export default ({ params }: any) => {
  return (
    <>
      <PanelCameraViews uuid={params.uuid} />
      <ActionButtons />
    </>
  );
};
