import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import SignUpTitle from "./SignUpTitle";

describe("Sign up top title", () => {
  it("should render top text correctly", () => {
    renderWithMockedProvider(<SignUpTitle />);
    expect(screen.getByText(/Sign up for PetNanny/i)).toBeInTheDocument();
    expect(screen.getByText(/It's free!/i)).toBeInTheDocument();
  });
});
