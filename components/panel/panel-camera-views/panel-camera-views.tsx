import { CameraDisplay } from "@/components/(shared)/camera-display";
import { CameraService } from "@/services/camera-service/camera.service";
import { useSearchParams } from "next/navigation";

interface PanelCameraViewsI {
  uuid: string;
}

export const PanelCameraViews = async ({ uuid }: PanelCameraViewsI) => {
  const { GETCamera } = CameraService;
  const { url, location } = await GETCamera(uuid);
  return (
    <div className="">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
        <CameraDisplay
          srcUrl={url}
          location={location}
          cameraType="basic"
          uuid={uuid}
        />
        <CameraDisplay
          srcUrl={url}
          location={location}
          cameraType="movement"
          uuid={uuid}
        />
        <CameraDisplay
          srcUrl={url}
          location={location}
          cameraType="detection"
          uuid={uuid}
        />
      </div>
    </div>
  );
};
