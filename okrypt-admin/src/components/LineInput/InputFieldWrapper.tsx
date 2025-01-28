const InputFieldWrapper = ({
  label,
  isRequired,
  children,
  formikProps,
  inputKey,
}: any) => {
  return (
    <div className=" mb-[4rem]">
      <div className="flex justify-start items-start columns-[4px]">
        {label && (
          <p className="text-white font-medium text-[1.6rem] mb-5">{label}</p>
        )}
        {isRequired && (
          <p className="text-danger ml-[.3rem] text-[1.6rem]">*</p>
        )}
      </div>
      {children}
      <p className="text-[13px] text-danger mt-[5px] mb-[12px] leading-[20px]">
        {formikProps.touched[inputKey] && formikProps.errors[inputKey] && (
          <p className="text-[13px] text-danger mt-[5px] mb-[12px] leading-[20px]">
            {formikProps.errors[inputKey]}
          </p>
        )}
      </p>
    </div>
  );
};

export default InputFieldWrapper;
