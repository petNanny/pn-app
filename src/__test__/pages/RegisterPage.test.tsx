import renderWithMockedProvider from "../utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterPage from "../../pages/RegisterPage";
import * as router from "react-router";

describe("Register page", () => {
  it("should render top text correctly", () => {
    renderWithMockedProvider(<RegisterPage />);
    expect(screen.getByText(/Sign up for Pawshake/i)).toBeInTheDocument();
    expect(screen.getByText(/It's free!/i)).toBeInTheDocument();
  });

  it("should render strategy login button correctly", async () => {
    renderWithMockedProvider(<RegisterPage />);
    const strategyItems = await screen.getAllByText(/Continue with/i);
    expect(strategyItems).toHaveLength(3);
  });

  it("should render sign up button correctly", async () => {
    renderWithMockedProvider(<RegisterPage />);
    expect(screen.getByRole("button", { name: "Sign up with email" })).toBeInTheDocument();
  });

  it("should render bottom text correctly", () => {
    renderWithMockedProvider(<RegisterPage />);
    expect(screen.getByText(/Already have a Pawshake account?/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Login/i)).toHaveLength(2);
  });

  it("should link to log in page correctly when click", async () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    renderWithMockedProvider(<RegisterPage />);
    const loginLinks = screen.getAllByText("Login");
    expect(loginLinks).toHaveLength(2);
    expect(loginLinks[1]).toBeVisible();
    await userEvent.click(loginLinks[1]);
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  it("should show sign up form correctly when click button", () => {
    renderWithMockedProvider(<RegisterPage />);
    userEvent.click(screen.getByText("Sign up with email"));
    expect(screen.queryByPlaceholderText(/First name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Last name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/User name/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create account" })).toBeInTheDocument();
  });
});
