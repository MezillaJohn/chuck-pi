const LeftRightAlignment = ({
  right,
  left,
}: {
  right: string | number | undefined;
  left: string;
}) => {
  return (
    <div className="flex items-center justify-between mb-[1rem]">
      <p className="text-[1.4rem] font-semibold text-white">{left}</p>
      <p className="text-[1.4rem] text-white"> {right} </p>
    </div>
  );
};

export default LeftRightAlignment;
