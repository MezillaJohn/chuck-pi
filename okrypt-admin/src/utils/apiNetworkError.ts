import toast from "react-hot-toast";

const appErrorHandler = (error: any) => {
  if (error) {
    if (error?.status === "FETCH_ERROR") {
      toast.error("Internet Connection Error");
    } else {
      toast.error(error?.data?.message || "Something went wrong");
    }
  }
};

export default appErrorHandler;
