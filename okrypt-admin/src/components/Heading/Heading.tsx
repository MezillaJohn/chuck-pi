const Heading = ({
  whiteText,
  secText,
}: {
  whiteText: string;
  secText: string;
}) => {
  return (
    <div className="flex gap-[4.2px] items-center text-[2.2rem] font-bold mb-[3.4rem]">
      <p>{whiteText}</p>
      <span className="text-secondary">{secText}</span>
    </div>
  );
};

export default Heading;
