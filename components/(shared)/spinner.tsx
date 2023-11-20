import { LoadingState } from "@/hooks/useInitialLoader";
import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerI {
  loadingState: LoadingState;
  children: React.ReactElement;
  errorComponent?: React.ReactElement;
  maintainChildren?: boolean;
}

/**
 * @param maintainChildren is used for self-managed HTML elements such as img
 */
export const Spinner = ({
  loadingState,
  children,
  errorComponent,
  maintainChildren,
}: SpinnerI) => {
  switch (loadingState) {
    case LoadingState.IDLE:
      return null;
    case LoadingState.LOADING:
      if (maintainChildren) {
        return (
          <div className="relative w-full aspect-video bg-slate-950">
            <ClipLoader
              color="white"
              className="absolute left-2/4 top-2/4 -translate-x-2/4 bg-slate-500"
            />
            {children}
          </div>
        );
      } else {
        return <ClipLoader />;
      }
    case LoadingState.FULFILLED:
      return children;
    case LoadingState.ERROR:
      return errorComponent || <p>Error while loading</p>;
  }
};
