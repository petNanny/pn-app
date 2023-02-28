import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store/";

test("renders learn react link", () => {
  //FIXME: this one need rewrite when the project run
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = screen.getByText(/GoogleMap/i);
  expect(linkElement).toBeInTheDocument();
});
