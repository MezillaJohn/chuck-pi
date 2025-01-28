import { useEffect } from "react";
import toast from "react-hot-toast";

export const useDisplayError = (error: any) => {
  useEffect(() => {
    if (error) {
      toast.error(
        error?.data?.message ||
          error?.message ||
          error?.error ||
          "An error occured"
      );
    }
  }, [error]);
};
