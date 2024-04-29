import React from "react";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link rel="noreferrer" to="https://t.me/Chuck_on_Base" target="_blank">
        <div className="w-7 lg:w-10 rounded-md overflow-hidden">
          <img
            src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 8.png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
      <Link
        rel="noreferrer"
        to="https://twitter.com/CHUCK_on_Base"
        target="_blank"
      >
        <div className="w-7 lg:w-10 rounded-md overflow-hidden">
          <img
            src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 11.png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
      <Link
        rel="noreferrer"
        to="hthttps://www.tiktok.com/@chucksdog"
        target="_blank"
      >
        <div className="w-8 lg:w-10 rounded-md overflow-hidden">
          <img
            src="/socials/Tiktok_logo.png"
            alt="Chuk"
            className="h-full w-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default FooterRight;
