import {
  useAllCoinQuery,
  useRemoveChainMutation,
} from "../../../redux/apis/AuthenticatedApis/Coin";
import Heading from "../../../components/Heading/Heading";
import SelectDropDown from "../../../components/Select/SelectDropDown";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { useEffect, useState } from "react";
import { Asset, Chain } from "../../../types/ApiResType";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { removeCoin } from "../../../redux/slice/saveCoinSlice";
import { useDispatch } from "react-redux";
import { useDisplayError } from "../../../hooks/displayError";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";

const RemoveChain = () => {
  const [item, setItem] = useState<Asset | undefined>(undefined);
  const [chain, setChain] = useState<Chain>();
  const [coinChain, setCoinChain] = useState<Chain[] | undefined>([]);

  const dispatch = useDispatch();

  const { data, isLoading, error }: any = useAllCoinQuery({});
  const [
    removeChainMutation,
    { isLoading: loading, error: err, isSuccess },
  ]: any = useRemoveChainMutation();

  useDisplayError(error);

  useDisplayError(err);

  useDisplaySuccess(isSuccess);

  useEffect(() => {
    if (isSuccess && item) {
      dispatch(removeCoin(item?.code));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (item) {
      const newChain = item?.chains?.map((chain) => {
        return { name: chain?.code, webp64: item?.webp64, ...chain };
      });
      setCoinChain(newChain);
    }
  }, [item]);

  const handleRemoveCoin = () => {
    removeChainMutation({ id: chain?.id });
  };

  return (
    <div>
      <Heading whiteText="Remove" secText="Coin from Users List" />

      <div className="md:flex items-center justify-between gap-[25px]">
        <SelectDropDown
          setItem={setItem}
          label="Select Coin"
          selectOptions={data?.data}
        />
        <SelectDropDown
          setItem={setChain}
          label="Select Chain"
          selectOptions={coinChain}
        />
      </div>
      <div className=" justify-center flex mt-[3rem]">
        <PrimaryButton
          handleClick={handleRemoveCoin}
          type="submit"
          isProcessing={loading}
          fullWidth={false}
        >
          Remove Chain
        </PrimaryButton>
      </div>
      <LoadingOverlay visible={isLoading} />
    </div>
  );
};

export default RemoveChain;
