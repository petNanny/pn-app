import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MessagePage from "./pages/MessagePage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import OrderPage from "./pages/OrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import BecomePetSitter from "./pages/BecomePetSitter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

import AuthRoute from "./components/AuthRoute";

const App = () => {
  //TODO: add user status to change the route, e.g. if user not login, user can't access chat page, or you can delete the useState value to null.
  const [user, setUser] = useState("shawn");
  const [admin, setAdmin] = useState("shawn");

  //Get user login
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRoute>
                <RegisterPage />
              </AuthRoute>
            }
          />
          <Route
            path="/becomePetSitter"
            element={
              <AuthRoute>
                <BecomePetSitter />
              </AuthRoute>
            }
          />
          <Route
            path="/userProfile/:formPage/:id"
            element={
              <AuthRoute authRequired>
                <UserProfilePage />
              </AuthRoute>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <AuthRoute authRequired>
                <ChatPage />
              </AuthRoute>
            }
          />
          <Route
            path="/message/:id"
            element={
              <AuthRoute authRequired>
                <MessagePage />
              </AuthRoute>
            }
          />
          <Route
            path="/order"
            element={
              <AuthRoute authRequired>
                <OrderPage />
              </AuthRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <AuthRoute authRequired>
                <PaymentPage />
              </AuthRoute>
            }
          />
          <Route path="/adminLogin" element={<AdminLoginPage />} />
          <Route
            path="/adminPage"
            element={admin ? <AdminHomePage /> : <Navigate to="/adminLogin" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
