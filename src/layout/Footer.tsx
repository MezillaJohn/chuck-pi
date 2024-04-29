import { Link } from 'react-router-dom'
import FooterLeft from '../components/FooterLeft'
import FooterRight from '../components/FooterRight'

const Footer = () => {
  return (
    <div className="pt-[10px] pb-[100px] md:pb-[150px]">
      <div className=" text-white relative">
        <div>
          <img src="/images/footerimg.png" alt="chuck" className="w-[100vw] h-[150px]" />
        </div>
        <div className="absolute top-1/2 left-2 md:left-5 transform  -translate-y-1/2">
          <FooterLeft />
        </div>
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2  -translate-y-1/2">
          <div className="flex flex-col text-center">
            <Link className="text-[10px] underline" to="">
              Get in touch
            </Link>
            <Link className="text-[10px] underline" to="">
              info@chuckonbase.io
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-2 md:right-5 transform  -translate-y-1/2">
          <FooterRight />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-[20px]">
        <div className="flex items-center gap-2">
          <p className="text-[14px]">Powered by BASE</p>
          <div className="w-7 lg:w-5 rounded-md overflow-hidden">
            <img
              src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 7.png"
              alt="Chuk"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="mt-2 text-[8px]">All Rights Reserved © 2024 Chuck On Base</div>
      </div>
    </div>
  )
}

export default Footer
