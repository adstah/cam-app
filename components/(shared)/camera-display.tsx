import { EDGE_ENDPOINTS } from "@/services/config/urls";
import { Button } from "./button";

interface CameraDisplayI {
  srcUrl: string;
  location?: string;
}

export const CameraDisplay = ({ srcUrl, location }: CameraDisplayI) => {
  return (
    <div className="relative">
      {/* <img src={`${srcUrl}${EDGE_ENDPOINTS.VIDEO}`} /> */}
      <img src={`http://localhost:3000/test-pic.jpg`} />
      <p className="absolute top-0 left-0 bg-white opacity-50 text-slate-800 rounded-r-md p-1">
        {location}
      </p>
      <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ">
        <Button css="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Detections
        </Button>
      </div>
    </div>
  );
};
