/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { EDGE_ENDPOINTS } from "@/services/config/urls";
import { Button } from "./button";
import { useState } from "react";
import Image from "next/image";

interface CameraDisplayI {
  srcUrl: string;
  location?: string;
  cameraType?: "detection" | "movement" | "basic";
}

export const CameraDisplay = ({
  srcUrl,
  location,
  cameraType = "basic",
}: CameraDisplayI) => {
  const [isError, setIsError] = useState(false);

  const handleErrorLoading = () => {
    setIsError(true);
  };

  return !isError ? (
    <div className="relative">
      <img
        src={`${srcUrl}${EDGE_ENDPOINTS.VIDEO}?cam-type=${cameraType}`}
        className="w-full"
        onError={handleErrorLoading}
      />
      <p className="absolute top-0 left-0 bg-white opacity-50 text-slate-800 rounded-r-md p-1">
        {location}
      </p>
      <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ">
        <Button css="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Detections
        </Button>
      </div>
    </div>
  ) : (
    <div className="relative w-full aspect-video bg-slate-950">
      <p className="absolute top-0 left-0 bg-white opacity-50 text-slate-800 rounded-r-md p-1">
        {location}
      </p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Couldnt load cam frames
      </div>
    </div>
  );
};
