import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useFormik } from "formik";
import { setLocalStorage } from "../../helpers/storage";
import { useLoginMutation } from "../../redux/apis/unAuthenticatedApis/unAuthenticatedApis";
import appErrorHandler from "../../utils/apiNetworkError";

export const useLoginHook = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loginMutation, { isLoading, error, isSuccess, data }]: any =
    useLoginMutation();

  useEffect(() => {
    if (error) {
      if (error?.status === 404) {
        formikProps.setFieldError(
          "email",
          error?.data?.message || "User does not exist"
        );
      } else {
        appErrorHandler(error);
      }
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successful");
      setLocalStorage("admin_token", data?.user_credentials?.token);
      isLoggedIn();
      navigate("/dashboard/home");
    }
  }, [isSuccess, data, isLoggedIn, navigate]);

  const validationSchema = yup.object().shape({
    password: yup.string().label("Password").required(),
    email: yup.string().label("Email").email().required(),
  });

  const formikProps = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("hello world");
      loginMutation({
        email: values.email,
        password: values.password,
      });
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return { formikProps, isLoading };
};
