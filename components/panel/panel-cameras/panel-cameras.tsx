import { CameraDisplay } from "@/components/(shared)/camera-display";
import { CameraService } from "@/services/camera-service/camera.service";
import React, { Suspense } from "react";

export const PanelCameras = async () => {
  const { GETCamerasList } = CameraService;
  const cameras = await GETCamerasList();
  console.log(cameras);
  return (
    <Suspense>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
        {cameras.map(({ url, location, uuid }) => (
          <React.Fragment key={url}>
            <CameraDisplay
              srcUrl={url}
              location={location}
              cameraType="basic"
              uuid={uuid}
            />
          </React.Fragment>
        ))}
      </div>
    </Suspense>
  );
};
