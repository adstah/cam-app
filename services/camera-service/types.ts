import { Camera } from "@prisma/client";

export type CameraTO = Pick<Camera, "location" | "url">;

export type CamerasListTO = Array<Camera>;
