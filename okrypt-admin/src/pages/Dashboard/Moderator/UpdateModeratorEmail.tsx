import { useState } from "react";
import Heading from "../../../components/Heading/Heading";
import SelectDropDown from "../../../components/Select/SelectDropDown";
import { useDisplayError } from "../../../hooks/displayError";
import {
  useModeratorQuery,
  useUpdateModeratorEmailMutation,
} from "../../../redux/apis/AuthenticatedApis/Moderator";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import OutlinedInput from "../../../components/OutlinedInput/OutlinedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import toast from "react-hot-toast";

const UpdateModeratorEmail = () => {
  const [item, setItem] = useState<any>(undefined);

  const { data, isLoading, error } = useModeratorQuery({});

  useDisplayError(error);

  const [
    updateModeratorEmail,
    { isLoading: loading, error: err, isSuccess: success },
  ] = useUpdateModeratorEmailMutation();

  useDisplayError(err);
  useDisplaySuccess(success);

  const moderators = data?.map((moderators) => {
    return {
      name: moderators?.userName,
      webp64: moderators?.profilePicture,
      ...moderators,
    };
  });

  const validationSchema = yup.object().shape({
    NewEmail: yup.string().label("Email").required(),
  });

  const formikProps = useFormik({
    initialValues: {
      NewEmail: "",
    },
    onSubmit: (values) => {
      if (!item) {
        toast("Select a moderator");
      } else {
        updateModeratorEmail({
          email: values.NewEmail,
          id: item?.id,
        });
      }
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <Heading whiteText="Update" secText="Moderator Email" />

      <div className="md:flex items-center md:gap-[3rem]">
        <SelectDropDown
          setItem={setItem}
          label="Select Moderator"
          selectOptions={moderators}
        />

        <div className="mt-[20px] md:mt-0 flex-1">
          <OutlinedInput
            type="email"
            label="New Email"
            isRequired
            formikProps={formikProps}
            inputKey="NewEmail"
            placeholder="New Email"
          />
        </div>
      </div>

      <LoadingOverlay visible={isLoading} />
      <div className=" justify-center flex w-[50%] mx-auto">
        <PrimaryButton
          isProcessing={loading}
          type="button"
          handleClick={formikProps.handleSubmit}
        >
          Update
        </PrimaryButton>
      </div>
    </div>
  );
};

export default UpdateModeratorEmail;
