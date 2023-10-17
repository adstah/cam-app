import { CameraDisplay } from "@/components/(shared)/camera-display";
import { CameraService } from "@/services/camera-service/camera.service";

export const PanelCameras = async () => {
  const { GETCamerasList } = CameraService;
  const cameras = await GETCamerasList();
  return (
    <div className="">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {cameras.map(({ url, location }) => (
          <>
            <CameraDisplay srcUrl={url} location={location} />
            <CameraDisplay
              srcUrl={url}
              location={location}
              cameraType="detection"
            />
            <CameraDisplay
              srcUrl={url}
              location={location}
              cameraType="background"
            />
          </>
        ))}
      </div>
    </div>
  );
};
