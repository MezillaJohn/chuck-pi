import { useNavigate } from "react-router-dom";
import "./App.css";
import { getLocalStorage } from "./helpers/storage";
import Login from "./pages/Login/Login";
import { useEffect } from "react";

function App() {
  let token = getLocalStorage("admin_token");

  const navigation = useNavigate();

  useEffect(() => {
    if (token) {
      navigation("/dashboard/home");
    }
  }, [token]);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
