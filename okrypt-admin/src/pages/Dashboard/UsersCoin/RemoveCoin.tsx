import {
  useAllCoinQuery,
  useRemoveCoinMutation,
} from "../../../redux/apis/AuthenticatedApis/Coin";
import Heading from "../../../components/Heading/Heading";
import SelectDropDown from "../../../components/Select/SelectDropDown";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { useEffect, useState } from "react";
import { Asset } from "../../../types/ApiResType";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { removeCoin } from "../../../redux/slice/saveCoinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useDisplayError } from "../../../hooks/displayError";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";
import { RootState } from "../../../redux/store";

const RemoveCoin = () => {
  const [item, setItem] = useState<Asset | undefined>(undefined);

  const dispatch = useDispatch();

  const userCoin = useSelector((state: RootState) => state.userCoin.usersCoin);

  const { data, isLoading, error }: any = useAllCoinQuery({});
  const [
    removeCoinMutation,
    { isLoading: loading, error: err, isSuccess },
  ]: any = useRemoveCoinMutation();

  useDisplayError(error);

  useDisplayError(err);

  useDisplaySuccess(isSuccess);

  useEffect(() => {
    if (isSuccess && item) {
      dispatch(removeCoin(item?.code));
    }
  }, [isSuccess]);

  const handleRemoveCoin = () => {
    removeCoinMutation({ id: item?.id });
  };

  const assetItems = Array.isArray(data?.data)
    ? data?.data?.filter((asset: Asset) => userCoin?.includes(asset?.code))
    : [];

  return (
    <div>
      <Heading whiteText="Remove" secText="Coin from Users List" />

      <SelectDropDown
        setItem={setItem}
        label="Select Coin"
        selectOptions={assetItems}
      />

      <div className=" justify-center flex mt-[3rem]">
        <PrimaryButton
          handleClick={handleRemoveCoin}
          type="submit"
          isProcessing={loading}
          fullWidth={false}
        >
          Remove Coin
        </PrimaryButton>
      </div>
      <LoadingOverlay visible={isLoading} />
    </div>
  );
};

export default RemoveCoin;
