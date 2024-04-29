// import DropBoxes from '../helpers/DropBoxes'
import { Link } from "react-router-dom";
import AppBtn from "./AppBtn";

export default function Hero() {
  return (
    <div className=" bg-primary">
      {/* <DropBoxes /> */}
      <div className=" w-[100%] md:w-[50%] mx-auto flex flex-col items-center min-h-[10px] md:min-h-screen gap-10 pt-[30px]">
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className=" w-[80%] h-[80%]  max-w-[380px] max-h-[380px] md:w-full md:h-full"
        >
          <img
            src="/images/chuck_logo2-removebg-preview.png"
            alt="chuck"
            height="100%"
            width="100%"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-8  items-center">
          <h1 className="font-window text-center text-[32px] md:text-[48px] leading-[40px]">
            Chuck, the round house
            <br />
            kicking crypto canine,
            <br />
            unleashed strength for a<br />
            pawsitive cause !
          </h1>
          <Link
            rel="noreferrer"
            to="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
            target="_blank"
          >
            <div className="mx-auto w-[160px]">
              <AppBtn title="Buy" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
