import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "reactstrap";
import Base from "./Components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/user_routes/UserDashboard";
import PrivateRoute from "./Components/PrivateRoute";
import ProfileInfo from "./pages/user_routes/ProfileInfo";
import PostPage from "./pages/PostPage";
import UserProvider from "./context/UserProvider";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<ProfileInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
