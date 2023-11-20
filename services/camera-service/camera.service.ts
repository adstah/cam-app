import { HTTP } from "../config/conf";
import { ENDPOINTS } from "../config/urls";
import { CameraTO, CamerasListTO } from "./types";

const { GET } = HTTP;
const { GET_CAM } = ENDPOINTS.CAMERAS;

const GETCamerasList = (): Promise<CamerasListTO> =>
  GET(GET_CAM, { next: { tags: ["cameras"] } }).then((res) => res.json());

const GETCamera = (uuid: string): Promise<CameraTO> => {
  return GET(`${GET_CAM}/${uuid}`).then((res) => res.json());
};

export const CameraService = { GETCamerasList, GETCamera };
