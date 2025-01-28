const LoadingOverlay = ({
  visible,
  showText,
}: {
  visible: boolean;
  showText?: string;
}) => {
  if (!visible) return null;
  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[1000]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-bold mt-4">
          {showText ?? "loading"}...
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
