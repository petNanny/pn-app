import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the component correctly", () => {
    render(<Footer />);
    const learnMore = screen.getByText("Learn More");
    const popularCities = screen.getByText("Popular Cities");
    const aboutUs = screen.getByText("About Us");
    const findUsOn = screen.getByText("Find us on");

    expect(learnMore).toBeInTheDocument();
    expect(popularCities).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
    expect(findUsOn).toBeInTheDocument();
  });
});
