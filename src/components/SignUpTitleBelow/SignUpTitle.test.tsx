import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import SignUpTitleBelow from "./SignUpTitleBelow";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";

describe("Sign up bottom title", () => {
  it("should render bottom text correctly", () => {
    renderWithMockedProvider(<SignUpTitleBelow />);
    expect(screen.getByText(/Already have a Pawshake account?/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("should link to log in page correctly when click", async () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    renderWithMockedProvider(<SignUpTitleBelow />);
    const loginLink = screen.getByText("Login");
    expect(loginLink).toBeVisible();
    await userEvent.click(loginLink);
    expect(navigate).toHaveBeenCalledWith("/login");
  });
});
