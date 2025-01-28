import { useState } from "react";
import Heading from "../../../components/Heading/Heading";
import TabUi from "../../../components/TabUi/TabUi";
import CoinList from "./component/CoinList";
import { useAllCoinQuery } from "../../../redux/apis/AuthenticatedApis/Coin";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { Asset } from "../../../types/ApiResType";
import { useDisplayError } from "../../../hooks/displayError";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AllCoins = () => {
  const [value, setValue] = useState(0);

  const userCoin = useSelector((state: RootState) => state.userCoin.usersCoin);

  const { data, isLoading, error } = useAllCoinQuery({});

  useDisplayError(error);

  const assetItems = Array.isArray(data?.data)
    ? data?.data?.filter((asset: Asset) => userCoin?.includes(asset?.code))
    : [];

  const coinToDisplay = value === 0 ? assetItems : data?.data;

  return (
    <div>
      <Heading whiteText="List Of" secText="Coins" />
      <TabUi setValue={setValue} value={value} />
      <div className="mt-[30px] md:w-[900px] mx-auto w-full">
        {coinToDisplay?.map((coin: Asset) => {
          return (
            <div key={coin?.code}>
              <CoinList coin={coin} />
            </div>
          );
        })}
      </div>
      <LoadingOverlay showText="updating" visible={isLoading} />
    </div>
  );
};

export default AllCoins;
