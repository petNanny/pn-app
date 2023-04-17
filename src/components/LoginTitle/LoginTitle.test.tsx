import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import LoginTitle from "./LoginTitle";

describe("Login top title", () => {
  it("should render top text correctly", () => {
    renderWithMockedProvider(<LoginTitle />);
    expect(screen.getByText(/Already a PetNanny member?/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in below!/i)).toBeInTheDocument();
  });
});
