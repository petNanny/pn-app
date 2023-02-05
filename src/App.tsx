import { useState } from "react";
import { Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import PetSitterCard from "./components/PetSitterCard";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";
import AdminHomePage from "./pages/AdminHomePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import OrderPage from "./pages/OrderPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  //TODO: add user status to change the route, e.g. if user not login, user can't access chat page, or you can delete the useState value to null.
  const [user, setUser] = useState("shawn");
  const [admin, setAdmin] = useState("shawn");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post/:id" element={<PetSitterCard />} />
        <Route path="/chat" element={user ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/order" element={user ? <OrderPage /> : <Navigate to="/login" />} />
        <Route path="/payment" element={user ? <PaymentPage /> : <Navigate to="/login" />} />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route
          path="/adminPage"
          element={admin ? <AdminHomePage /> : <Navigate to="/adminLogin" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
