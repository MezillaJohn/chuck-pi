import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Twitter from "../components/Twitter";
import UniSwap from "../components/UniSwap";
const Home = () => {
  return (
    <div className="px-[20px]">
      <Hero />
      <Overview />
      <UniSwap />
      <Twitter />
    </div>
  );
};

export default Home;
