import renderWithMockedProvider from "../../../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import PetSitterAbout from "./PetSitterAbout";

describe("About PetSitter", () => {
  it("should render subtitle correctly", () => {
    renderWithMockedProvider(
      <PetSitterAbout firstName="David" introduction="<p>Hi my name is David</p>" />
    );
    const TextAbout = screen.getAllByText(/About/i);
    expect(TextAbout[0]).toBeInTheDocument();
  });
});
