import ActiveUsers from "./components/ActiveUsers";
import QuickActions from "./components/QuickActions";
import RecentTransactions from "./components/RecentTransactions";
import TradedVolume from "./components/TradedVolume";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-[2rem] mb-[30px]">
        <TradedVolume />
        <ActiveUsers />
      </div>
      <div className="flex items-center justify-between gap-[2rem]">
        <RecentTransactions />
        <QuickActions />
      </div>
    </div>
  );
};

export default Home;
