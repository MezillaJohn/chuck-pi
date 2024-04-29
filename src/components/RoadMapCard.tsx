import React from 'react'

const RoadMapCard = ({
  children,
  title,
  date,
  number,
}: {
  children: React.ReactChild
  title: string
  date: string
  number: string
}) => {
  return (
    <div data-aos="zoom-in" data-aos-delay="0" className="mb-6 flex max-w-lg w-full md:w-2/3 mx-auto ">
      <div className="flex flex-col space-y-1 shadow-md pl-4 pt-2 pb-4 relative text-base bg-white rounded-xl text-black px-4 min-w-sm w-full">
        <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-primary">
          <div className="h-6 w-6 bg-white   rounded-full text-base font-bold flex items-center justify-center font-window">
            {number}
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay="400" className="flex  flex-col space-y-1 ml-2 ">
          <h3 className=" text-sm font-bold ">
            <div className="flex text-primary justify-between font-window text-2xl">
              <div className="leading-6">{title}</div> <div className="whitespace-nowrap"> {date}</div>
            </div>
          </h3>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RoadMapCard
