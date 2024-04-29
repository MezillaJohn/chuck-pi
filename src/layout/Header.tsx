import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header
      className={`h-[8.5vh] px-[45px]  border-b border-b-[#FFFFFF20] w-full bg-secondary `}
    >
      <div className=" w-full  h-full flex items-center justify-between">
        <div data-aos="flip-down" data-aos-delay="100">
          <Link to="/">
            <div className="w-10 rounded-md overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Chuk"
                height={"100%"}
                width={"100%"}
                className="h-full w-full"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <nav
            data-aos="flip-down"
            data-aos-delay="100"
            className="hidden lg:block "
          >
            <ul className=" font-window flex space-x-10 text-[16.3px] font-normal  text-textBlue">
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
          </nav>
          <div
            data-aos="flip-down"
            data-aos-delay="100"
            onClick={handleNav}
            className="ml-2 cursor-pointer lg:hidden text-primary"
          >
            <FiMenu size={30} />
          </div>

          <MobileNav handleNav={handleNav} openNav={openNav} />
        </div>
      </div>
    </header>
  );
}
