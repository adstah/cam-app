import { CameraService } from "@/services/camera-service/camera.service";
import { EDGE_ENDPOINTS } from "@/services/config/urls";

export const PanelCameras = async () => {
  const { GETCamerasList } = CameraService;
  const cameras = await GETCamerasList();
  return (
    <div className="container vh-100">
      <div className="row h-100">
        {cameras.map(({ url, location }) => (
          <>
            <div className="col-md-6 ">
              <img
                className=" hover:p-2 mw-100"
                src={`${url}${EDGE_ENDPOINTS.VIDEO}`}
              />
              <p>{location}</p>
            </div>
            <div className="col-md-6">
              <img className="mw-100" src={`${url}${EDGE_ENDPOINTS.VIDEO}`} />
              <p>{location}</p>
            </div>
            <div className="col-md-6">
              <img className="mw-100" src={`${url}${EDGE_ENDPOINTS.VIDEO}`} />
              <p>{location}</p>
            </div>
            <div className="col-md-6">
              <img className="mw-100" src={`${url}${EDGE_ENDPOINTS.VIDEO}`} />
              <p>{location}</p>
            </div>
            <div className="col-md-6">
              <img className="mw-100" src={`${url}${EDGE_ENDPOINTS.VIDEO}`} />
              <p>{location}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
