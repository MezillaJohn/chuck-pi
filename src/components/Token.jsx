import React, { useState } from "react";
import DropBoxes from "./helpers/DropBoxes";
import { FaCopy } from "react-icons/fa";
import Image from "next/image";

export default function Token() {
  const address = "0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A";
  const [valueToCopy, setValueToCopy] = useState(address);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      alert("Contract Address copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  return (
    <section id="tokenomics" className="pb-10 pt-10">
      <div className="container mx-auto px-4 font-silkscreen">
        <DropBoxes />
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="font-upheavtt text-center text-secondary text-3xl "
        >
          Token Address
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          onClick={handleCopyToClipboard}
          className="whitespace-wrap break-words font-window  text-center  mb-10 font-medium text-2xl"
        >
          0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A{" "}
          {/* <span>
            <FaCopy size={16} />
          </span> */}
        </p>
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="font-upheavtt text-center text-3xl text-secondary"
        >
          Token Supply
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-2xl text-center font-window  font-medium"
        >
          1,000,000,000
        </p>

        <div className="mt-10 flex flex-wrap items-center font-window justify-center gap-y-10 gap-x-20">
          <div className="flex flex-col items-center gap-3 ">
            {/* <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-1"
            ></div> */}
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <Image
                src="/images/TOCKENOMICS_60_.png"
                height={500}
                width={500}
                alt="chart"
                className="h-full w-full"
              />
            </div>
            <p data-aos="fade-left" data-aos-delay="100" className="text-2xl">
              70% LP
            </p>
          </div>
          {/* <div className="flex flex-col items-center gap-3">
            <div className="chart chart-2"></div>
            <p className="text-2xl">18% Development</p>
          </div> */}
          <div className="flex flex-col items-center gap-3">
            {/* <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div> */}
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <Image
                src="/images/TOCKENOMICS_15_.png"
                height={500}
                width={500}
                alt="chart"
                className="h-full w-full"
              />
            </div>

            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              15% Development
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            {/* <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-3"
            ></div> */}
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <Image
                src="/images/TOCKENOMICS_10_.png"
                height={500}
                width={500}
                alt="chart"
                className="h-full w-full"
              />
            </div>
            <p data-aos="fade-left" data-aos-delay="100" className="text-2xl">
              7.5% AirDrop
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            {/* <div
              data-aos="zoom-in" 
              data-aos-delay="100"
              className="chart chart-4"
            ></div> */}
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <Image
                src="/images/TOCKENOMICS_10_.png"
                height={500}
                width={500}
                alt="chart"
                className="h-full w-full"
              />
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              7.5% Marketing
            </p>
          </div>
          {/* <div className="flex flex-col items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="chart chart-5"
            ></div>
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <Image
                src="/images/TOCKENOMICS_5_.png"
                height={500}
                width={500}
                alt="chart"
                className="h-full w-full"
              />
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-2xl">
              5% Dev
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
