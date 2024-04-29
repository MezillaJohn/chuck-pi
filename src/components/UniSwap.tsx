import SwappingWidget from "./SwappingWidget";

const UniSwap = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-[50px] md:py-[80px] gap-[50px]">
      <div className=" w-full">
        <h2 className="text-secondary font-window text-[33px] md:text-[45px] leading-[35px] md:leading-[40px] mb-[20px]">
          Ready to embark
          <br />
          on your journey with us ?
        </h2>
        <div className="flex flex-col gap-[20px] text-[16px] md:text-[18px] text-textGray">
          <p>
            Here's how you can easily buy $Chuck and become part of our growing
            community.
          </p>
          <p className=" italic">
            Please follow the steps directly within the Uniswap interface
            embedded on this page.
          </p>
          <p>
            1. Bridge your Ethereum to the Base network using the Base token
            bridge
            <br />
            2. Connect your Metamask wallet to uniswap
            <br />
            3. Swap your Ethereum for Chuck
          </p>
          <p>
            Please double-check to ensure you have entered the correct token
            address. 0x7A8A5012022BCCB
            <br />
            f3EA4b03cD2bb5583d915fb1A
          </p>
          <p className="italic">
            For detailed purchasing instructions, please refer to the 'How to
            Buy' section.
          </p>
        </div>
      </div>
      <div className=" w-full h-[550px]">
        <SwappingWidget />
      </div>
    </div>
  );
};

export default UniSwap;
