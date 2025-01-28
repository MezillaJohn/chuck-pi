import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import {
  useAllCoinQuery,
  useEditCoinMutation,
} from "../../../redux/apis/AuthenticatedApis/Coin";
import { Asset } from "../../../types/ApiResType";
import SelectDropDown from "../../../components/Select/SelectDropDown";
import * as yup from "yup";
import { useFormik } from "formik";
import OutlinedInput from "../../../components/OutlinedInput/OutlinedInput";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import toast from "react-hot-toast";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useDisplayError } from "../../../hooks/displayError";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const EditCoin = () => {
  const [item, setItem] = useState<Asset | undefined>(undefined);

  const { data, isLoading, error }: any = useAllCoinQuery({});
  const [editCoinMuation, { isLoading: loading, error: err, isSuccess }]: any =
    useEditCoinMutation();

  const userCoin = useSelector((state: RootState) => state.userCoin.usersCoin);

  useDisplayError(error);

  useDisplayError(err);

  useDisplaySuccess(isSuccess);

  const validationSchema = yup.object().shape({
    sellRate: yup.number().label("Sell Rate").required(),
    buyRate: yup.number().label("Buy Rate").required(),
  });

  const formikProps = useFormik({
    initialValues: {
      sellRate: "",
      buyRate: "",
    },
    onSubmit: (values) => {
      if (!item) {
        toast("Select a coin");
      } else {
        editCoinMuation({
          code: item?.code,
          sellRate: values.sellRate,
          buyRate: values.buyRate,
          id: item?.id,
        });
      }
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (item) {
      formikProps.setFieldValue("sellRate", item?.sellRate);
      formikProps.setFieldValue("buyRate", item?.buyRate);
      console.log("first");
    }
  }, [item]);

  const assetItems = Array.isArray(data?.data)
    ? data?.data?.filter((asset: Asset) => userCoin?.includes(asset?.code))
    : [];

  return (
    <div>
      <Heading whiteText="Edit" secText="Coin" />
      <div className="md:flex items-center gap-[2rem]">
        <div className="mb-[3rem] md:mb-0 flex-1">
          <SelectDropDown
            setItem={setItem}
            label="Select Coin"
            selectOptions={assetItems}
          />
        </div>
        <OutlinedInput
          type="number"
          label="Sell Rate"
          isRequired
          formikProps={formikProps}
          inputKey="sellRate"
          placeholder="Sell Rate"
        />
      </div>

      <OutlinedInput
        type="number"
        label="Buy Rate"
        isRequired
        formikProps={formikProps}
        inputKey="buyRate"
        placeholder="Buy Rate"
      />

      <div className=" justify-center flex">
        <PrimaryButton
          handleClick={formikProps.handleSubmit}
          type="submit"
          isProcessing={loading}
          fullWidth={false}
        >
          Edit Coin
        </PrimaryButton>
      </div>

      <LoadingOverlay showText="updating" visible={isLoading} />
    </div>
  );
};

export default EditCoin;
