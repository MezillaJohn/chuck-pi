import Heading from "../../../components/Heading/Heading";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import {
  useAllTransactionQuery,
  useConfirmTransactionMutation,
  useRejectTransactionMutation,
} from "../../../redux/apis/AuthenticatedApis/Trade";
import { formatWithCommas } from "../../../utils/fomatwithcomma";
import { formatTradeType } from "../../../utils/formatTradeType";
import { returnColor } from "../../../utils/returnColor";
import moment from "moment";
import { useDisplayError } from "../../../hooks/displayError";
import AppModal from "../../../components/Modal/AppModal";
import TransactionDetails from "./component/TransactionDetails";
import { useEffect, useState } from "react";
import { Transaction } from "../../../types/ApiResType";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useDisplaySuccess } from "../../../hooks/displaySuccess";

const GetTransactions = () => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [clickedTransaction, setClickedTransaction] = useState<
    Transaction | undefined
  >();
  const { data, isLoading, error } = useAllTransactionQuery({});
  const [
    confirmTrade,
    { isLoading: cLoading, error: cError, isSuccess: cSuccess },
  ] = useConfirmTransactionMutation();
  const [
    rejectTrade,
    { isLoading: rLoading, error: rError, isSuccess: rSuccess },
  ] = useRejectTransactionMutation();

  useDisplayError(error);
  useDisplayError(cError);
  useDisplayError(rError);
  useDisplaySuccess(cSuccess);
  useDisplaySuccess(rSuccess);

  useEffect(() => {
    if (cSuccess || rSuccess || rError || cError) {
      setIsOpenDetails(false);
    }
  }, [rSuccess, cSuccess, rError, cError]);

  return (
    <>
      <div>
        <Heading whiteText="All" secText="Transaction" />

        {data?.transactions?.map((transaction) => {
          const coinName = transaction?.trade?.chain?.exchange?.coinName;
          const type = transaction?.trade?.tradeType;
          const color = returnColor(transaction?.status);

          const readableDate = moment(transaction?.createdAt).fromNow();

          let status = "";
          if (transaction?.status === "PENDING") {
            status = "Pending";
          } else if (transaction?.status === "REJECTED") {
            status = "Rejected";
          } else if (transaction?.status === "SUCCESSFUL") {
            status = "Successful";
          }

          return (
            <div key={transaction?.id} className="flex flex-col">
              <div
                onClick={() => {
                  setClickedTransaction(transaction);
                  setIsOpenDetails(true);
                }}
                className="bg-secondaryLight mt-[15px]  flex items-center justify-between p-[1rem] rounded-[1rem]"
              >
                <div>
                  <h3 className="text-[700] text-[1.6rem] mb-[.5rem] ">
                    {formatTradeType(type, coinName)}
                  </h3>
                  <p className="text-grayTwo text-[1.4rem] ">
                    {transaction?.trade?.chain?.exchange?.code === "USDT"
                      ? transaction?.trade?.coinAmount?.toFixed(2)
                      : transaction?.trade?.coinAmount}{" "}
                    {transaction?.trade?.chain?.exchange?.code}
                  </p>
                </div>
                <div style={{ width: "12%" }}>
                  <h3 className="text-[700] text-[1.6rem] mb-[.5rem] text-[1.4rem]">
                    NGN{" "}
                    {formatWithCommas(
                      transaction?.trade?.localAmount?.toString()
                    )}
                  </h3>
                  <p style={{ color: color }} className=" text-[1.4rem] ">
                    {status}
                  </p>
                </div>
              </div>
              <p style={{ width: "12%" }} className="self-end mr-[1rem] mt-1">
                {readableDate}
              </p>
            </div>
          );
        })}

        <LoadingOverlay visible={isLoading} />
      </div>

      <AppModal
        open={isOpenDetails}
        handleClose={() => setIsOpenDetails(false)}
      >
        <TransactionDetails clickedTransaction={clickedTransaction} />
        <div className="flex items-center gap-[3rem]">
          <PrimaryButton
            isProcessing={rLoading}
            handleClick={() =>
              rejectTrade({ tradeId: clickedTransaction?.trade?.id })
            }
            type="button"
          >
            Reject
          </PrimaryButton>
          <PrimaryButton
            isProcessing={cLoading}
            handleClick={() =>
              confirmTrade({ tradeId: clickedTransaction?.trade?.id })
            }
            type="button"
          >
            Confirm
          </PrimaryButton>
        </div>
      </AppModal>
    </>
  );
};

export default GetTransactions;
