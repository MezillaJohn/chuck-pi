import { Link } from "react-router-dom";

export default function WhitePaper() {
  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="  min-h-screen pb-10">
      <div className="container mx-auto pt-8 font-nimbus font-light px-[20px]">
        <div className="flex items-center font-upheavtt text-4xl lg:text-6xl justify-between mb-10 ">
          <div className="text-[20px] opacity-0">Print</div>
          <div className="text-[28px] md:text-3xl text-center">WHITE PAPER</div>
          <div onClick={handlePrintPdf} className="text-[20px] cursor-pointer">
            Print
          </div>
        </div>

        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="font-upheavtt text-center text-[20px] md:text-3xl "
        >
          What is $CHUCK?
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className=" text-[16px] md:text-[18px] mt-2 text-center"
        >
          $CHUCK is More than just a cryptocurrency, it's a heartfelt admiration
          to the enduring bond between iconic figures, humans and their loyal
          canine companions. In a world filled with digital currencies, $CHUCK
          stands out by embodying the resilience and strength symbolized by
          man's best friend.The connection between man and dog is built on
          mutual trust, loyalty, and companionship which $CHUCK wants to build
          with the community.
        </p>

        <h3
          data-aos="fade-right"
          data-aos-delay="100"
          className="font-upheavtt text-center text-[20px] lg:text-3xl mt-14"
        >
          The Vision
        </h3>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className=" text-[16px] md:text-[18px] mt-2 text-center"
        >
          $CHUCK is on a mission to shine a light on the BASE ecosystem, a
          groundbreaking layer two scaling solution for Ethereum that deserves
          wider recognition. $CHUCK goes beyond the digital realm; it's about
          building a community that celebrates companionship and loyalty.
          Inspired by pop culture heroes and their beloved dogs, $CHUCK is not
          just about raising awareness; it's about fostering a vibrant community
          where members can connect, share, and create from themed NFTs to retro
          gaming-inspired merchandise. $CHUCK offers a platform for creativity
          and collaboration.
        </p>

        <h3
          data-aos="fade-right"
          data-aos-delay="100"
          className="font-upheavtt text-center text-[20px] lg:text-3xl mt-14  "
        >
          The Utility
        </h3>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className=" text-[16px] md:text-[18px] mt-2 text-center"
        >
          ☑$CHUCK serves as more than just a token; it's a passport to an
          exclusive club. Owning $CHUCK tokens grants access to the $CHUCK
          Telegram group and Chuck-Bot, a specialized bot providing community
          members with crucial insights into the crypto market, including
          updates on trending coins and ETH gas fees.
          <br />
          ☑$CHUCK is also committed to making a difference in the real world.
          Each $CHUCK transaction includes a 5% tax, from which 2% is dedicated
          to supporting dog charities. This initiative marks $CHUCK as the first
          meme coin with a direct focus on benefiting our furry friends making
          $CHUCK the first meme coin with a heart. So join us on this adventure
          as we unleash the power of $CHUCK on the BASE platform and beyond.
          Together, we can make a difference while having a great time along the
          way.
        </p>

        <Link rel="noreferrer" to="https://www.base.org/" target="_blank">
          <div className="flex items-center gap-1 justify-center text-xl mt-14">
            <div> CHUCK on Base</div>
            <div className="w-7 lg:w-12 rounded-md overflow-hidden">
              <img
                src="/images/social.png"
                alt="Chuk"
                height={500}
                width={500}
                className="h-full w-full"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
