"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import DropBoxes from "./helpers/DropBoxes";

export default function How() {
  return (
    <div id="how">
      <DropBoxes />
      <div className="pb-20 min-h-screen px-4 container mx-auto max-w-5xl font-nimbus">
        <div className="lg:pt-[140px] pt-[100px] text-lg   ">
          <h2
            data-aos="flip-down"
            data-aos-delay="100"
            className="font-upheavtt text-center text-3xl  "
          >
            How to buy
          </h2>
          <h1
            data-aos="flip-down"
            data-aos-delay="100"
            className="font-upheavtt text-2xl mt-4 text-secondary"
          >
            Have some Ethereum in your wallet
          </h1>

          <p data-aos="flip-down" data-aos-delay="100">
            Purchase on an exchange or swap on a DEX
          </p>

          <div>
            <h2
              data-aos="flip-down"
              data-aos-delay="100"
              className="  font-upheavtt text-2xl mt-8 text-secondary"
            >
              Add Base network to metamask
            </h2>
            <p data-aos="flip-down" data-aos-delay="100">
              Connect to your MM wallet and go to your Networks. Click Add
              Network, Base Mainnet should be in the list of popular networks so
              you don&apos;t need to add it manually. Just press Add and Approve
              popup, now just switch to the Base network.
            </p>

            <div className="mt-10">
              <video src="/videos/Add_base_to_metamask.mp4" controls></video>
            </div>
          </div>

          <div>
            <h2
              data-aos="flip-down"
              data-aos-delay="100"
              className="  font-upheavtt text-2xl mt-10 text-secondary"
            >
              Bridge your ETH
            </h2>
            <p data-aos="flip-down" data-aos-delay="100">
              Bridge you Ethereum network to the Base network using:
              <br />{" "}
              <a
                rel="noreferrer"
                href="https://bridge.base.org/deposit"
                target="_blank"
              >
                https://bridge.base.org/deposit
              </a>
            </p>
            <div className="mt-10">
              <video src="/videos/Bridge_Base.mp4" controls></video>
            </div>
          </div>
        </div>
        <div>
          <h2
            data-aos="flip-down"
            data-aos-delay="100"
            className="  font-upheavtt text-2xl mt-10 text-secondary"
          >
            Swap your ETH on Base for $CHUCK.{" "}
          </h2>
          <p
            data-aos="flip-down"
            data-aos-delay="100"
            className="whitespace-wrap break-words"
          >
            Go on Uniswap and swap your Base Ethereum for $CHUCK. Make sure you
            use the correct token address <br />
            0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A
          </p>
          <div className="mt-10">
            <video src="/videos/How_to_uniswap_edit.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  );
}
