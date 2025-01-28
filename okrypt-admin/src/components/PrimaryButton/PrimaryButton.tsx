import { ReactNode } from "react";
import CircularProgressSpinner from "../LoadingSpinner/LoadingSpinner";

interface Props {
  children: ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  isProcessing: boolean;
  type: "button" | "reset" | "submit";
  fullWidth?: boolean;
}

const PrimaryButton = ({
  children,
  handleClick,
  disabled,
  isProcessing,
  type,
  fullWidth = true,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${
        fullWidth ? "w-full" : "w-[50%] mx-auto"
      } bg-secondary text-background p-[1rem] font-medium rounded-[1rem] mt-[3rem] text-[1.6rem] shadow-lg`}
    >
      {isProcessing ? <CircularProgressSpinner /> : children}
    </button>
  );
};

export default PrimaryButton;
