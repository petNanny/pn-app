import { Provider } from "react-redux";
import store from "../../store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "../../components/AuthRoute";

const renderWithMockedProvider = (children: JSX.Element) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthRoute>{children}</AuthRoute>
      </BrowserRouter>
    </Provider>
  );
};

export default renderWithMockedProvider;
