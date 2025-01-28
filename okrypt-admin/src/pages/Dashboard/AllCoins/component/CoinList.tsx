import { Asset } from "../../../../types/ApiResType";

const CoinList = ({ coin }: { coin: Asset }) => {
  return (
    <div className="flex items-center justify-between border-b-border py-[3rem] border-b-[.6px] ">
      <div className="flex items-center gap-[1.4rem]">
        <img src={coin?.webp64} alt="logo" className="w-[30px] h-[35px]  " />
        <div>
          <div className="flex items-center gap-[5px]">
            <p className="text-[1.4rem]">{coin?.name} </p>~
            {coin?.chains?.map((chain) => (
              <p>{` (${chain.code})`}</p>
            ))}
          </div>

          <p className="text-[1.2rem]"> {coin?.code} </p>
        </div>
      </div>

      <p className="text-[1.4rem]">
        {coin?.sellRate ? "NGN" : ""}
        {coin?.sellRate ?? ""}{" "}
      </p>
    </div>
  );
};

export default CoinList;
