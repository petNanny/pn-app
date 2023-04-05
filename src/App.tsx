import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ChatPage from "./pages/ChatPage";
import MessagePage from "./pages/MessagePage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import OrderPage from "./pages/OrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import BecomePetSitter from "./pages/BecomePetSitter";
import PetSitterDetails from "./pages/PetSitterDetails";
import PetSitterPage from "./pages/PetSitterPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

import AuthRoute from "./components/AuthRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useStoreSelector } from "./store/hook";
import AdminAuthRoute from "./components/AdminAuthRoute";

const App = () => {
  //TODO: add user status to change the route, e.g. if user not login, user can't access chat page, or you can delete the useState value to null.
  const [user, setUser] = useState("shawn");

  const AdminHomepage = useStoreSelector((state) => state.adminPage.AdminHomepage);

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
            path="/petSitter/:id"
            element={
              <AuthRoute>
                <PetSitterPage />
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

          <Route
            path="/adminLogin"
            element={
              <AdminAuthRoute>
                <AdminLoginPage />
              </AdminAuthRoute>
            }
          />

          <Route
            path="/adminPage"
            element={
              <AdminAuthRoute authRequired>
                <AdminHomePage />
              </AdminAuthRoute>
            }
          />

          <Route
            path="/petSitterDetails/:id"
            element={
              <AuthRoute>
                <PetSitterDetails />
              </AuthRoute>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <AuthRoute>
                <ChatPage />
              </AuthRoute>
            }
          />
          <Route
            path="/error"
            element={
              <AuthRoute>
                <ErrorPage />
              </AuthRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <AuthRoute>
              <ErrorPage />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
