/*eslint-disable*/
import { useEffect } from "react";

const useEventListener = (
  key: any,
  handler: any,
  element: any = window,
  options?: any
) => {
  useEffect(() => {
    element.addEventListener(key, handler, options);
    return () => {
      element.removeEventListener(key, handler, options);
    };
  });
};

export const eventDispatch = (
  key: any,
  detail?: any,
  element: any = window
) => {
  element.dispatchEvent(new CustomEvent(key, { detail }));
};

export default useEventListener;
/*eslint-enable*/
