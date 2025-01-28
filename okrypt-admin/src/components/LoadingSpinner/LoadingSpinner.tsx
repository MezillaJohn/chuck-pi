import "../../App.css";

export default function CircularProgressSpinner({ border }: any) {
  return (
    <div className="flex justify-center item-center">
      <div>
        <div
          className={`loadingSpinner w-[30px] h-[30px] border-solid border-[5px] ${
            border ? border : "border-background"
          } border-t-transparent`}
        ></div>
      </div>
    </div>
  );
}
