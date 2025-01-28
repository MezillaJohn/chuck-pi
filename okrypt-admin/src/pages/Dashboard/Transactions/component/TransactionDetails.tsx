import LeftRightAlignment from "../../../../components/LeftRightAlignment/LeftRightAlignment";
import { Trade, Transaction } from "../../../../types/ApiResType";
import { formatTradeType } from "../../../../utils/formatTradeType";

const TransactionDetails = ({
  clickedTransaction,
}: {
  clickedTransaction: Transaction | undefined;
}) => {
  const coinName = clickedTransaction?.trade?.chain?.exchange?.coinName;
  const symbol = clickedTransaction?.trade?.chain?.exchange?.code;
  const type = clickedTransaction?.trade?.tradeType;
  const netowrk = clickedTransaction?.trade?.chain?.code;
  const admin_address = clickedTransaction?.trade?.chain?.walletAddress;
  const user_address = clickedTransaction?.trade?.walletAddress;
  const { bank } = clickedTransaction?.trade as Trade;

  return (
    <div>
      <LeftRightAlignment left="Coin Name" right={coinName} />
      <LeftRightAlignment left="Coin Symbol" right={symbol} />
      <LeftRightAlignment left="Type" right={formatTradeType(type, coinName)} />
      <LeftRightAlignment left="Network" right={netowrk} />
      {type === "SELL" ? (
        <LeftRightAlignment left="Admin Address" right={admin_address} />
      ) : (
        <LeftRightAlignment left="User Address" right={user_address} />
      )}
      {type === "SELL" && (
        <LeftRightAlignment left="Bank Name" right={bank?.bankName} />
      )}
      {type === "SELL" && (
        <LeftRightAlignment left="Account Holder" right={bank?.bankUserName} />
      )}
      {type === "SELL" && (
        <LeftRightAlignment left="Account Number" right={bank?.accountNumber} />
      )}

      <LeftRightAlignment
        left="Transaction ID"
        right={clickedTransaction?.trade?.id}
      />
    </div>
  );
};

export default TransactionDetails;
