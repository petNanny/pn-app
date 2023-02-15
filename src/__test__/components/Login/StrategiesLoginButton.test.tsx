import { render, screen } from "@testing-library/react";
import StrategiesLoginButton from "../../../components/Login/StrategiesLoginButton";
import { AiFillGithub } from "react-icons/ai";
describe("Strategies login button", () => {
  const mockData = {
    icon: <AiFillGithub />,
    backgroundColor: "#000000",
    strategyName: "Github",
    color: "#FFFFFF",
  };
  it("should render the strategy login button correctly", () => {
    render(
      <StrategiesLoginButton
        icon={mockData.icon}
        backgroundColor={mockData.backgroundColor}
        strategyName={mockData.strategyName}
        color={mockData.color}
      />
    );

    expect(screen.getByText("Continue with Github")).toBeInTheDocument();
    expect(screen.getByTestId("strategiesLoginButton")).toHaveStyle(`backgroundColor:#000000`);
    expect(screen.getByTestId("strategiesLoginButton")).toHaveStyle(`color:#ffffff`);
  });
});
