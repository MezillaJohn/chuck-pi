const AppBtn = ({ title }: any) => {
  return (
    <div className="relative inline-block">
      <img
        src="/images/btn.png"
        alt="button"
        className="md:w-[150px] md:h-[60px] w-[140px] h-[60px]"
      />
      <p className="text-[1rem] md:text-[1.2rem] font-upheavtt absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        {title}
      </p>
    </div>
  );
};

export default AppBtn;
