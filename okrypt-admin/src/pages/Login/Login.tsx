import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useLoginHook } from "./Login.hook";
import LineInput from "../../components/LineInput/LineInput";
import { HiOutlineMail } from "react-icons/hi";
import { COLORS } from "../../constants/theme";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);

  const { formikProps, isLoading } = useLoginHook();

  return (
    <div className="w-screen  min-h-screen  overflow-y-auto overflow-x-hidden  flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[1rem] flex items-center justify-center">
        <div className="max-w-[500px]  overflow-x-hidden w-full min-h-[100vh]   md:min-h-[60rem] bg-background rounded-lg p-[2rem] pb-[4rem] pt-[6rem] shadow-custom">
          <div className="flex justify-center items-center">
            <img
              src="/image/okryptLogo.png"
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </div>
          <p className="text-dark text-[2.4rem] text-white text-center font-semibold mb-[5rem] mt-4">
            Okrypt
          </p>
          <form onSubmit={formikProps.handleSubmit}>
            <LineInput
              leftIcon={
                <HiOutlineMail
                  size={20}
                  color={
                    formikProps.touched.email && formikProps.errors.email
                      ? COLORS.danger
                      : COLORS.grayTwo
                  }
                />
              }
              type="email"
              label="Email"
              isRequired
              formikProps={formikProps}
              inputKey="email"
              placeholder="Type your email here"
            />

            <LineInput
              leftIcon={
                <AiOutlineLock
                  size={20}
                  color={
                    formikProps.touched.email && formikProps.errors.email
                      ? COLORS.danger
                      : COLORS.grayTwo
                  }
                />
              }
              rightIcon={
                showPwd ? (
                  <AiOutlineEye size={20} color={COLORS.grayTwo} />
                ) : (
                  <AiOutlineEyeInvisible size={20} color={COLORS.grayTwo} />
                )
              }
              handleRightIconPress={() => setShowPwd((state) => !state)}
              type={showPwd ? "text" : "password"}
              label="Password"
              isRequired
              formikProps={formikProps}
              inputKey="password"
              placeholder="Your password"
            />
            <PrimaryButton
              type="submit"
              isProcessing={isLoading}
              disabled={isLoading}
            >
              Login
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
}
