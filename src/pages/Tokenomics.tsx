export default function Tokenomics() {
  return (
    <section id="tokenomics" className="pb-10 pt-10">
      <div className="container mx-auto px-4 font-silkscreen">
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
          className="whitespace-wrap break-words font-window  text-center  mb-10 font-medium text-2xl"
        >
          0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A
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
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <img
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

          <div className="flex flex-col items-center gap-3">
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <img
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
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <img
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
            <div data-aos="zoom-in" data-aos-delay="100" className="h-40 w-40">
              <img
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
        </div>
      </div>
    </section>
  );
}
