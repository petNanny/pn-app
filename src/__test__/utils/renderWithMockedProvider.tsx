import { Provider } from "react-redux";
import store from "../../store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "../../components/AuthRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

const renderWithMockedProvider = (children: JSX.Element) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || ""}>
          <AuthRoute>{children}</AuthRoute>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default renderWithMockedProvider;
