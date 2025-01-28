"use client";
import { FormikProps } from "formik";
import InputFieldWrapper from "./InputFieldWrapper";
import { useState } from "react";

interface Props {
  formikProps: FormikProps<any>;
  type: string;
  inputKey: string;
  placeholder: string;
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  label?: string;
  isRequired?: boolean;
  handleRightIconPress?: () => void;
}

const LineInput = ({
  formikProps,
  type,
  inputKey,
  placeholder,
  leftIcon,
  rightIcon,
  label,
  isRequired,
  handleRightIconPress,
  ...others
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputFieldWrapper
      label={label}
      isRequired={isRequired}
      formikProps={formikProps}
      inputKey={inputKey}
    >
      <div
        className={`flex justify-between items-center w-full ${
          formikProps.touched[inputKey] && formikProps.errors[inputKey]
            ? "border-danger"
            : isFocused
            ? "border-secondary"
            : "border-grayTwo"
        } border-b-[0.5px] pb-5`}
      >
        <div>{leftIcon}</div>
        <input
          className="flex-1 text-white pl-5 text-[1.6rem] bg-transparent outline-none"
          onChange={formikProps.handleChange(inputKey)}
          onBlur={() => {
            setIsFocused(false);
            return formikProps.handleBlur(inputKey);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          type={type}
          placeholder={placeholder}
          value={formikProps.values[inputKey]}
          {...others}
        />
        <div onClick={handleRightIconPress}>{rightIcon}</div>
      </div>
    </InputFieldWrapper>
  );
};

export default LineInput;
