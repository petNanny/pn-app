import renderWithMockedProvider from "../../__test__/utils/renderWithMockedProvider";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "./SearchBar";

describe("Search bar", () => {
  it("should render the search bar component correctly", () => {
    renderWithMockedProvider(<SearchBar />);
    expect(screen.queryByPlaceholderText(/Suburb or Address/i)).toBeInTheDocument();
  });

  it("should render service correctly", async () => {
    renderWithMockedProvider(<SearchBar />);
    const serviceInput = screen.getByTestId("serviceInputHomeVisits");
    const noDogClick = screen.getByTestId("advancedInputNoDogs");
    const noChildrenClick = screen.getByTestId("advancedInputNoChildren");
    userEvent.click(serviceInput);
    userEvent.click(noDogClick);
    userEvent.click(noChildrenClick);

    await waitFor(() => {
      expect(screen.getByTestId("addressServiceShow")).toHaveTextContent("Home Visits");
      expect(screen.getByTestId("advancedInput")).toHaveTextContent("2 advanced filter(s)");
    });
  });

  it("should render advanced filter correctly", async () => {
    renderWithMockedProvider(<SearchBar />);
    const noDogClick = screen.getByTestId("advancedInputNoDogs");
    const noChildrenClick = screen.getByTestId("advancedInputNoChildren");
    userEvent.click(noDogClick);
    userEvent.click(noChildrenClick);

    await waitFor(() => {
      expect(screen.getByTestId("advancedInput")).toHaveTextContent("2 advanced filter(s)");
    });
  });

  it("should render pet number correctly", async () => {
    renderWithMockedProvider(<SearchBar />);
    const increaseSmallDogNum = screen.getByTestId("smallDogIncrease");
    const increaseMediumDogNum = screen.getByTestId("mediumDogIncrease");
    const decreaseMediumDogNum = screen.getByTestId("mediumDogDecrease");
    userEvent.click(increaseSmallDogNum);
    userEvent.click(increaseMediumDogNum);
    userEvent.click(increaseMediumDogNum);
    userEvent.click(increaseMediumDogNum);
    userEvent.click(decreaseMediumDogNum);

    await waitFor(() => {
      expect(screen.getByTestId("petNumInput")).toHaveTextContent("3 pets");
    });
  });
});
