import { render } from "@testing-library/react";
import PetSitterHomeMap from "./PetSitterHomeMap";

describe("PetSitter's home map component", () => {
  it("should render the component correctly", () => {
    //sydeny opera house
    const latitude = -33.85657;
    const longitude = 151.21531;
    const petSitterCoordinates = [longitude, latitude];
    const expectedImgSrc =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latitude +
      "," +
      longitude +
      "&zoom=12&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&key=" +
      process.env.REACT_APP_GOOGLE_MAP_KEY;

    render(<PetSitterHomeMap petSitterCoordinates={petSitterCoordinates} />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("petter's home area");
    expect(testImage.src).toContain(expectedImgSrc);
  });
});
