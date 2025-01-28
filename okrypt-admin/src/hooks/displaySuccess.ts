import { useEffect } from "react";
import toast from "react-hot-toast";

export const useDisplaySuccess = (isSuccess: boolean) => {
  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated Successfully");
    }
  }, [isSuccess]);
};
