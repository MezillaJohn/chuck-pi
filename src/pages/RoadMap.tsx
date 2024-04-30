import RoadMapCard from "../components/RoadMapCard";

export default function RoadMap() {
  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div id="roadmap" className="pb-20 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center font-upheavtt text-4xl lg:text-6xl justify-between mb-10 ">
          <div className="text-[20px] opacity-0  bg-white  text-primary px-[10px] rounded">
            Print
          </div>
          <div className="text-[28px] md:text-3xl text-center">
            Chuck Roadmap
          </div>
          <div
            onClick={handlePrintPdf}
            className="text-[20px] cursor-pointer  bg-white  text-primary px-[10px]  rounded"
          >
            Print
          </div>
        </div>

        <div className="flex flex-col gap-5  font-nimbus">
          <RoadMapCard
            number="1"
            title="Project Awareness Building"
            date="Q2 2024"
          >
            <ul className="text-base list-disc">
              <li>Token Creation</li>
              <li>BASE DEX Listing: Uniswap</li>
              <li>Website Development</li>
              <li>Social Media Development: Telegram, X</li>
              <li>Chuck Bot Telegram Integration</li>
              <li>Cross Channel Marketing with Influencers</li>
              <li>Major Dextools: CG and CMC Listings</li>
            </ul>
          </RoadMapCard>

          <RoadMapCard number="2" title="Community Advancement" date="Q3 2024">
            <ul className="text-base list-disc">
              <li>Donation to Dog Charity</li>
              <li>Chuck NFT and Design Planning</li>
              <li>Chuck Merchandise</li>
              <li>Community Competitions</li>
              <li>Utility Planning</li>
            </ul>
          </RoadMapCard>

          <RoadMapCard number="3" title="Community Advancement" date="Q4 2024">
            <ul className="text-base list-disc">
              <li>Website Upgrade</li>
              <li>NFT Mint and Launch</li>
              <li>Community Game Creation</li>
              <li>Cross Community Partnership</li>
            </ul>
          </RoadMapCard>

          <RoadMapCard number="4" title="Continued Development" date="Q1 2025">
            <ul className="text-base list-disc">
              <li>NFT Development</li>
              <li>Community Game Development</li>
              <li>Airdrop/Reward</li>
            </ul>
          </RoadMapCard>
        </div>
      </div>
    </div>
  );
}
