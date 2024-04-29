import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

interface Props {
  handleNav: () => void;
  openNav: boolean;
}

const MobileNav = ({ handleNav, openNav }: Props) => {
  return (
    <nav className="lg:hidden bg-secondary">
      <div className="lg:hidden ">
        <div
          onClick={handleNav}
          className={`${
            openNav
              ? "h-screen duration-500 fixed "
              : "duration-500 h-0 absolute"
          } bg-[#150e2895]   z-[100] left-0 top-0 bottom-0 right-0`}
        >
          <div
            className={`${
              openNav
                ? "translate-y-0 duration-500 opacity-100"
                : "duration-300 -translate-y-full opacity-0"
            } flex flex-col bg-secondary    px-10 py-8`}
          >
            <div
              onClick={handleNav}
              className=" w-[28px] place-self-end mx-4 cursor-pointer text-primary"
            >
              <IoCloseSharp size={30} color={COLORS.primary} />
            </div>
            <ul className="flex flex-col space-y-4 text-[20px] font-medium mt-10 bggray-800 justify-center place-self-center text-textBlue font-window  w-full items-start ">
              <li>
                <Link to="/how-to-buy">How to buy</Link>
              </li>
              <li>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
                >
                  Buy token
                </Link>
              </li>
              <li>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257?t=1713004788021"
                >
                  Chart
                </Link>
              </li>
              <li className="link">
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://linktr.ee/chuckonbase"
                >
                  Join us
                </Link>
              </li>
              <li>
                <Link to="/whitepaper">Whitepaper</Link>
              </li>
              <li>
                <Link to="/tokenomics">Tokenomics</Link>
              </li>
              <li className="link">
                <Link to="/roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
