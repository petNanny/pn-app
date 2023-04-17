import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import LoginTitleBelow from "./LoginTitleBelow";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";

describe("Login bottom title", () => {
  it("should render bottom text correctly", () => {
    renderWithMockedProvider(<LoginTitleBelow />);
    expect(screen.getByText(/Not signed up on PetNanny yet?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });

  it("should link to sign up page correctly when click", async () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    renderWithMockedProvider(<LoginTitleBelow />);

    const signUpLink = screen.getByText("Sign up");
    expect(signUpLink).toBeVisible();
    await userEvent.click(signUpLink);
    expect(navigate).toHaveBeenCalledWith("/register");
  });
});
