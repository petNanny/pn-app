import renderWithMockedProvider from "../../../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import PetSitterServices from "./PetSitterServices";

describe("PetSitter services", () => {
  const singleService = {
    service: "Dog Boarding",
    price: 35,
    unit: "Overnight stay at the sitter's home",
    serviceDetail: "night",
  };

  it("should render PetSitter services correctly", () => {
    renderWithMockedProvider(<PetSitterServices firstName="david" service={[singleService]} />);
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    const sitterHome = screen.getAllByText(/At the sitter's home/i);
    expect(sitterHome[0]).toBeInTheDocument();
    const yourHome = screen.getAllByText(/At your home/i);
    expect(yourHome[0]).toBeInTheDocument();
    expect(screen.getByText(/also offers/i)).toBeInTheDocument();
  });
});
