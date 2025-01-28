import { useFormik } from "formik";
import Heading from "../../../components/Heading/Heading";
import AutoComp from "../../../components/Select/AutoComp";
import * as yup from "yup";
import OutlinedInput from "../../../components/OutlinedInput/OutlinedInput";
import {
  useAddCoinMutation,
  useAllCoinQuery,
} from "../../../redux/apis/AuthenticatedApis/Coin";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { useEffect, useState } from "react";
import { Asset } from "../../../types/ApiResType";
import { Checkbox } from "@mui/material";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";
import { useDisplayError } from "../../../hooks/displayError";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { saveCoin } from "../../../redux/slice/saveCoinSlice";

const AddCoin = () => {
  const [searchTerm, setSearchTerm] = useState<Asset | null>(null);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const { data, isLoading, error }: any = useAllCoinQuery({});

  const [addCoinMutation, { isLoading: loading, error: err, isSuccess }]: any =
    useAddCoinMutation();

  useDisplayError(err);
  useDisplayError(error);

  useDisplaySuccess(isSuccess);

  useEffect(() => {
    if (isSuccess && searchTerm) {
      dispatch(saveCoin(searchTerm?.code));
    }
  }, [isSuccess]);

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
      if (!searchTerm) {
        toast("Select a coin");
      } else {
        addCoinMutation({
          code: searchTerm?.code,
          isTopAsset: checked,
          sellRate: values.sellRate,
          buyRate: values.buyRate,
          coinName: searchTerm?.name,
        });
      }
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  const options = data?.data?.map((data: { name: string }) => {
    return { label: data?.name, ...data };
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
            type="number"
            label="Amount"
            isRequired
            formikProps={formikProps}
            inputKey="sellRate"
            placeholder="Sell Rate"
          />
        </div>
      </div>

      <div className="md:flex items-center md:gap-[3rem]">
        <OutlinedInput
          type="number"
          label="Amount"
          isRequired
          formikProps={formikProps}
          inputKey="buyRate"
          placeholder="Buy Rate"
        />
        <div className="flex-1 text-[1.5rem] gap-[1rem] flex items-center">
          <Checkbox
            {...label}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            sx={{
              transform: "scale(1.4)",
              "& .MuiSvgIcon-root": {
                fontSize: "2rem",
                color: checked ? "white" : "transparent",
                border: checked ? "none" : "1px solid #FFFFFF",
                borderRadius: "4px",
              },
            }}
          />
          <p>Is Top Asset</p>
        </div>
      </div>

      <LoadingOverlay showText="updating" visible={isLoading} />

      <div className=" justify-center flex">
        <PrimaryButton
          handleClick={formikProps.handleSubmit}
          type="submit"
          isProcessing={loading}
          fullWidth={false}
        >
          Add Coin
        </PrimaryButton>
      </div>
    </div>
  );
};

export default AddCoin;
