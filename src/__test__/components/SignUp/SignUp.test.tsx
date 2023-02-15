import renderWithMockedProvider from "../../utils/renderWithMockedProvider";
import { screen, waitFor } from "@testing-library/react";
import SignUp from "../../../components/SignUp/SignUp";
import userEvent from "@testing-library/user-event";

describe("login component", () => {
  it("should render the login component correctly", () => {
    renderWithMockedProvider(<SignUp />);
    expect(screen.queryByPlaceholderText(/First name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Last name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/User name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create account" })).toBeInTheDocument();
  });

  it("should block and show error message when missing or incorrect input email", async () => {
    renderWithMockedProvider(<SignUp />);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    userEvent.type(emailInput, "1234567890");
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    await waitFor(() => {
      expect(screen.getByTestId("emailError")).toHaveTextContent("Please input a valid email");
    });
    userEvent.clear(emailInput);
    await waitFor(() => {
      expect(screen.getByTestId("emailError")).toHaveTextContent("Required");
    });
  });

  it("should block and show error message when missing or incorrect input password", async () => {
    renderWithMockedProvider(<SignUp />);
    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, "1234567890");
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    await waitFor(() => {
      expect(screen.getByTestId("passwordError")).toHaveTextContent(
        "Must include uppercase and lowercase letters, a number and a special character. Allowed special characters: !@#$%"
      );
    });
    userEvent.clear(passwordInput);
    await waitFor(() => {
      expect(screen.getByTestId("passwordError")).toHaveTextContent("Required");
    });
  });

  it("should block and show error message when missing or incorrect input first name", async () => {
    renderWithMockedProvider(<SignUp />);
    const firstNameInput = screen.getByRole("textbox", { name: /firstName/i });
    userEvent.type(firstNameInput, "1234567890");
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    await waitFor(() => {
      expect(screen.getByTestId("firstNameError")).toHaveTextContent(
        "Must begin with a letter. Can contain letters, numbers, underscores and hyphens"
      );
    });
    userEvent.clear(firstNameInput);
    await waitFor(() => {
      expect(screen.getByTestId("firstNameError")).toHaveTextContent("Required");
    });
  });

  it("should block and show error message when missing or incorrect input last name", async () => {
    renderWithMockedProvider(<SignUp />);
    const lastNameInput = screen.getByRole("textbox", { name: /lastName/i });
    userEvent.type(lastNameInput, "1234567890");
    userEvent.click(screen.getByRole("button", { name: "Create account" }));
    await waitFor(() => {
      expect(screen.getByTestId("lastNameError")).toHaveTextContent(
        "Must begin with a letter. Can contain letters, numbers, underscores and hyphens"
      );
    });
    userEvent.clear(lastNameInput);
    await waitFor(() => {
      expect(screen.getByTestId("lastNameError")).toHaveTextContent("Required");
    });
  });
});
