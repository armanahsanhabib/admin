import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/common/Sidebar";
import AddPortfolio from "./pages/AddPortfolio";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MailBox from "./pages/MailBox";
import MailDetails from "./pages/MailDetails";
import MyPortfolio from "./pages/MyPortfolio";
import SendMail from "./pages/SendMail";

const App = () => {
  // State for username, password, and authentication status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true",
  );
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {},
  );

  // Handle input change for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request using Axios
      const response = await axios.post(
        "http://localhost:3000/user/user-authentication",
        {
          username,
          password,
        },
      );

      if (response.status === 200) {
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
        setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        setError("");
      }
    } catch (error) {
      setError("Invalid username or password!");
      toast.error("Invalid username or password!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // Logout function to clear authentication status
  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
    localStorage.removeItem("userData"); // Remove userData on logout
    toast.success("Logout successful!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  return (
    <Router>
      {!authenticated ? (
        <LoginPage
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      ) : (
        <div className="app flex h-screen bg-[#fbf7f4]">
          <Sidebar
            setAuthenticated={setAuthenticated}
            userData={userData}
            logout={logout}
          />
          <Routes>
            <Route path="/" element={<MailBox />} />
            <Route path="/mail-details/:id" element={<MailDetails />} />
            <Route path="/my-portfolio" element={<MyPortfolio />} />
            <Route path="/send-mail" element={<SendMail />} />
            <Route path="/add-portfolio" element={<AddPortfolio />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
      <ToastContainer />
    </Router>
  );
};

export default App;
