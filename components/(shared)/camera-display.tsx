/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { EDGE_ENDPOINTS } from "@/services/config/urls";
import { Button } from "./button";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Spinner } from "./spinner";
import {
  LoadingAction,
  LoadingState,
  useInitialLoader,
} from "@/hooks/useInitialLoader";

interface CameraDisplayI {
  srcUrl: string;
  location?: string;
  uuid: string;
  cameraType?: "detection" | "movement" | "basic";
}

export const CameraDisplay = ({
  srcUrl,
  location,
  uuid,
  cameraType = "basic",
}: CameraDisplayI) => {
  const { dispatch, loadingState } = useInitialLoader({ deps: [] });
  const { uuid: urlUuid } = useParams();

  const handleErrorLoading = () => {
    dispatch({ type: LoadingAction.REJECT });
  };

  const handleFulFilledLoading = () => {
    dispatch({ type: LoadingAction.FULFILL });
  };

  return (
    <Spinner
      loadingState={LoadingState.FULFILLED}
      maintainChildren
      errorComponent={
        <div className="relative w-full aspect-video bg-slate-950">
          <p className="absolute top-0 left-0 bg-white opacity-50 text-slate-800 rounded-r-md p-1">
            {location}
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Could not establish connection
          </div>
        </div>
      }
    >
      <div className="relative">
        <img
          src={`${srcUrl}${EDGE_ENDPOINTS.VIDEO}?cam-type=${cameraType}`}
          // src={
          //   "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80ZDU2NGVmN2ZkNTNlNGU3NmU1ZTUyMDk0NWRjYzRjMT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.Q1BuJVFn_MUr6eRoBogCkebyWkC3zU0903WuZMd5x7M"
          // }
          className="w-full"
          onError={handleErrorLoading}
          onLoad={handleFulFilledLoading}
        />
        {!urlUuid && (
          <>
            <p className="absolute top-0 left-0 bg-white opacity-50 text-slate-800 rounded-r-md p-1">
              {location}
            </p>
            <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ">
              <Link href={`/panel/cameras/${uuid}`}>
                <Button css="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  All views
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </Spinner>
  );
};
