import React from "react";
import { Link } from "react-router-dom";

const FooterLeft = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link rel="noreferrer" to="https://www.base.org/" target="_blank">
        <div className="w-7 lg:w-10 rounded-md overflow-hidden">
          <img
            src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 7.png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
      <Link
        rel="noreferrer"
        to="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257"
        target="_blank"
      >
        <div className="w-5 lg:w-7 rounded-md overflow-hidden">
          <img
            src="/socials/DEXTools Isotype_white (alternative color).png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
      <Link
        rel="noreferrer"
        to="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
        target="_blank"
      >
        <div className="w-7 lg:w-10 rounded-md overflow-hidden">
          <img
            src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 6.png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default FooterLeft;
