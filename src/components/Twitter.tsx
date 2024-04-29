import TwitterWidget from './TwitterWidget'
import AppBtn from './AppBtn'

const Twitter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start py-[50px] md:py-[80px] gap-[50px]">
      <div className=" w-full">
        <h2 className="text-secondary font-window text-[33px] md:text-[45px] leading-[35px] md:leading-[40px] mb-[20px]">
          Welcome to our vibrant
          <br />
          community !
        </h2>
        <div className="flex flex-col gap-[20px] text-[16px] md:text-[18px] text-textGray">
          <p>
            Stay connected for the latest news, exclusive insights, and engaging content by following us on social
            media. Let's engage in ongoing conversations and join forces to craft something incredible.
          </p>

          <p>You are now a valued member of a truly unique community!</p>

          <div className="mt-[10px]">
            <AppBtn title="JOIN US" />
          </div>
        </div>
      </div>
      <div className=" w-full h-[500]">
        <TwitterWidget />
      </div>
    </div>
  )
}

export default Twitter
