import { IoFilter } from "react-icons/io5";
import RecentTransactionTable from "./RecentTransactionTable";

const RecentTransactions = () => {
  return (
    <div className="bg-whiteTransaparent rounded-lg  h-[45rem]  flex-[2.5]">
      <div className="flex items-center justify-between p-[2rem]  border-b-[0.5px] border-primaryOpacity pb-[2rem]">
        <p className="text-[1.6rem] font-bold">Recent Transactions</p>
        <p className=" text-[1.6rem] text-whiteSecondary flex items-center gap-[1rem] ">
          <IoFilter />
          <span>Filter</span>
        </p>
      </div>
      <RecentTransactionTable />
    </div>
  );
};

export default RecentTransactions;
