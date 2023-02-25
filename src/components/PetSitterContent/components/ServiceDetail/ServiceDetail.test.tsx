import renderWithMockedProvider from "../../../../__test__/utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import ServiceDetail from "./ServiceDetail";

describe("About PetSitter", () => {
  it("should render subtitle correctly", () => {
    renderWithMockedProvider(
      <ServiceDetail
        src="src"
        serviceName="Dog Walking"
        serviceDetail="Overnight stay at the sitter's home"
        servicePrice={35}
        serviceUnit="night"
      />
    );
    const price = screen.getAllByText(/35 AUD/i);
    expect(price[0]).toBeInTheDocument();
    const serviceName = screen.getAllByText(/Dog Walking/i);
    expect(serviceName[0]).toBeInTheDocument();
    const serviceUnit = screen.getAllByText(/night/i);
    expect(serviceUnit[0]).toBeInTheDocument();
    const serviceDetail = screen.getAllByText(/Overnight stay at the sitter's home/i);
    expect(serviceDetail[0]).toBeInTheDocument();
  });
});
