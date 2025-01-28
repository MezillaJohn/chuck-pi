import { useFormik } from "formik";
import Heading from "../../../components/Heading/Heading";
import AutoComp from "../../../components/Select/AutoComp";
import * as yup from "yup";
import OutlinedInput from "../../../components/OutlinedInput/OutlinedInput";
import {
  useAddChainMutation,
  useAllCoinQuery,
} from "../../../redux/apis/AuthenticatedApis/Coin";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { useEffect, useState } from "react";
import { Asset } from "../../../types/ApiResType";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";
import { useDisplayError } from "../../../hooks/displayError";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { saveCoin } from "../../../redux/slice/saveCoinSlice";

const AddChain = () => {
  const [searchTerm, setSearchTerm] = useState<Asset | null>(null);

  const dispatch = useDispatch();

  const { data, isLoading, error }: any = useAllCoinQuery({});

  const [addChainMutation, { isLoading: loading, error: err, isSuccess }]: any =
    useAddChainMutation();

  useDisplayError(err);
  useDisplayError(error);

  useDisplaySuccess(isSuccess);

  useEffect(() => {
    if (isSuccess && searchTerm) {
      dispatch(saveCoin(searchTerm?.code));
    }
  }, [isSuccess]);

  const validationSchema = yup.object().shape({
    chainName: yup.string().label("Chain").required(),
    walletAddress: yup.string().label("Wallet Address").required(),
  });

  const formikProps = useFormik({
    initialValues: {
      chainName: "",
      walletAddress: "",
    },
    onSubmit: (values) => {
      if (!searchTerm) {
        toast("Select a coin");
      } else {
        addChainMutation({
          id: searchTerm?.id,
          chainName: values.chainName,
          walletAddress: values.walletAddress,
        });
      }
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  const options = data?.data?.map((data: { name: string }) => {
    return { label: data?.name, ...data };
  });

  return (
    <div>
      <Heading whiteText="Add" secText="Coin To Users List" />
      <div className=" md:flex items-center md:gap-[3rem]">
        <AutoComp
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={options}
        />
        <div className="mt-[2.5rem] md:mt-0 flex-1 ">
          <OutlinedInput
            type="text"
            label="Chain"
            isRequired
            formikProps={formikProps}
            inputKey="chainName"
            placeholder="Chain name here"
          />
        </div>
      </div>

      <div className="md:flex items-center md:gap-[3rem]">
        <OutlinedInput
          type="text"
          label="Wallet Address"
          isRequired
          formikProps={formikProps}
          inputKey="walletAddress"
          placeholder="Enter chain wallet address here"
        />
      </div>

      <LoadingOverlay showText="updating" visible={isLoading} />

      <div className=" justify-center flex">
        <PrimaryButton
          handleClick={formikProps.handleSubmit}
          type="submit"
          isProcessing={loading}
          fullWidth={false}
        >
          Add Chain
        </PrimaryButton>
      </div>
    </div>
  );
};

export default AddChain;
