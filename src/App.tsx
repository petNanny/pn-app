import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
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
import CalendarPage from "./pages/CalendarPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import AuthRoute from "./components/AuthRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useStoreSelector } from "./store/hook";
import AdminAuthRoute from "./components/AdminAuthRoute";
import PetPage from "./pages/PetPage";
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top when route change (not working for now)
// const location = useLocation();
// useLayoutEffect(() => {
//   window.scrollTo(0, 0);
// }, [location.pathname]);

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
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || ""}>
                <AuthRoute>
                  <LoginPage />
                </AuthRoute>
              </GoogleOAuthProvider>
            }
          />
          <Route
            path="/register"
            element={
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || ""}>
                <AuthRoute>
                  <RegisterPage />
                </AuthRoute>
              </GoogleOAuthProvider>
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
            path="/adminPage/"
            element={
              <AdminAuthRoute authRequired>
                <AdminHomePage />
              </AdminAuthRoute>
            }
          />

          <Route
            path="/adminPage/:formPage"
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
            path="/pet/:id"
            element={
              <AuthRoute>
                <PetPage />
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
          <Route
            path="/userProfile/availability/:id"
            element={
              <AuthRoute authRequired>
                <CalendarPage />
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
        <Route
          path="/verify-email/:userId/:token/"
          element={
            <AuthRoute>
              <VerifyEmailPage />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
