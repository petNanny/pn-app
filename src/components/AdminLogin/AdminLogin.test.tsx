import AdminLogin from "./AdminLogin";
import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("login component", () => {
  it("should render the login component correctly", () => {
    renderWithMockedProvider(<AdminLogin />);
    expect(screen.queryByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
