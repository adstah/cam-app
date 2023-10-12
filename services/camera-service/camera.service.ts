import { HTTP } from "../config/conf";
import { ENDPOINTS } from "../config/urls";
import { CamerasListTO } from "./types";

const { GET } = HTTP;
const { GET_LIST } = ENDPOINTS.CAMERAS;

const GETCamerasList = (): Promise<CamerasListTO> =>
  GET(GET_LIST, { next: { tags: ["cameras"] } }).then((res) => res.json());

export const CameraService = { GETCamerasList };
