import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("login component", () => {
  it("should render the login component correctly", () => {
    renderWithMockedProvider(<Login />);
    expect(screen.queryByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
  });

  it("should block and show Required when missing email or password", async () => {
    renderWithMockedProvider(<Login />);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "1234567890");
    userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByTestId("emailError")).toHaveTextContent("Please input a valid email");
    });
    userEvent.clear(emailInput);
    await waitFor(() => {
      expect(screen.queryByText("Required")).toBeVisible();
    });
  });
});
