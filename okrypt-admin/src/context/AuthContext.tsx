"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import jwt_decode from "jwt-decode";
import { getLocalStorage } from "../helpers/storage";

type contextProviderProps = {
  children: React.ReactNode;
};

interface UserCredentials {
  token: string | undefined;
  userId: string;
  userType: string;
  userName: string;
  phoneNumber: string | null;
  profilePicture: string;
  isVerified: boolean;
  email: string;
}

interface TokenPayload {
  message: string;
  user_credentials: UserCredentials;
}

type InitialProps = {
  setUserToken: Dispatch<SetStateAction<string | null>>;
  userToken: string | null;
  persistToken: string;
  isLoggedIn: () => void;
  userInfo: TokenPayload | undefined;
  setIsLogout: Dispatch<SetStateAction<boolean>>;
  isLogout: boolean;
  isSignout: boolean;
  setIsSignout: Dispatch<SetStateAction<boolean>>;
  setMenuModalVisibility: Dispatch<SetStateAction<boolean>>;
  menuModalVisibility: boolean;
  setSellModalVisible: Dispatch<SetStateAction<boolean>>;
  sellModalVisible: boolean;
};

const initialProps: InitialProps = {
  setUserToken: () => {},
  userToken: null,
  persistToken: "",
  isLoggedIn: () => {},
  setIsLogout: () => {},
  isLogout: false,
  isSignout: false,
  setIsSignout: () => {},
  setMenuModalVisibility: () => {},
  menuModalVisibility: false,
  setSellModalVisible: () => {},
  sellModalVisible: false,
  userInfo: {
    message: "",
    user_credentials: {
      token: undefined,
      userId: "string",
      userType: "",
      userName: "",
      phoneNumber: "",
      profilePicture: "",
      isVerified: true,
      email: "",
    },
  },
};

export const AuthContext = createContext(initialProps);

export default function AuthContextProvider({
  children,
}: contextProviderProps) {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [persistToken, setPersistToken] = useState("");
  const [userInfo, setUserInfo] = useState<TokenPayload>();
  const [isLogout, setIsLogout] = useState(false);
  const [isSignout, setIsSignout] = useState(false);
  const [menuModalVisibility, setMenuModalVisibility] =
    useState<boolean>(false);
  const [sellModalVisible, setSellModalVisible] = useState(false);

  const isLoggedIn = async () => {
    try {
      let token = getLocalStorage("admin_token");
      if (token) {
        setPersistToken(token);
        const decodedUserInfo = jwt_decode(token as string);
        setUserInfo(decodedUserInfo as TokenPayload);
      } else {
        setPersistToken("");
      }
    } catch (e) {
      console.log(`Loggin error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [persistToken, userToken]);

  return (
    <AuthContext.Provider
      value={{
        setUserToken,
        userToken,
        persistToken,
        setIsLogout,
        isLoggedIn,
        setIsSignout,
        isSignout,
        userInfo,
        isLogout,
        setMenuModalVisibility,
        menuModalVisibility,
        setSellModalVisible,
        sellModalVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
