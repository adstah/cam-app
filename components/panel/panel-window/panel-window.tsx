import { CameraService } from "@/services/camera-service/camera.service";

export const PanelWindow = async () => {
  const { GETCamerasList } = CameraService;
  const cameras = await GETCamerasList();
  return (
    <ol>
      {cameras.map((camera) => (
        <li>{camera.uuid}</li>
      ))}
    </ol>
  );
};
