import React from "react";
import { StyledPetSitterAboutContent, StyledPetSitterAboutTitle } from "./StyledPetSitterAbout";

//TODO: CHANGE TO REAL DATA FORM PetSitterAboutProps
const petSitter = {
  firstName: "Louise",
  introduction:
    "<p>Hi my name is Louise, I am a 32 year old female pet sitter based in Yarraville.</p><p>My previous experience includes volunteering at a dog rescue shelter for over 3 years andI also have behaviourist training.</p><p>I have owned my own rescue dog who recently passed away so am looking to get back into petsitting to have some furry company.</p><p>I am happy to work with high energy dogs who need multiple walks a day all the way throughto the lap dog. All dogs big or small are welcome.</p><p>I live on my own and have a secure house with a fence both out the front and out the back.Happy for the dog to stay indoors with me during the day and at night time.</p><p>I have air conditioning and will make sure the house is cool on warm days.</p><p>I work from home 3 days a week and am flexible on that arrangement.</p><p>I have lived with dogs my whole life and would love to look after your furry loved one.</p><p>I am happy to look after your dog for long extended periods or as short as you need.</p><p>If your dog has any medication or specific requirements, I commit to adhering to them andensuring your pet gets the love and support it deserves.</p><p>I look forward to meeting your furry companion.</p>",
};

interface PetSitterAboutProps {
  firstName: string;
  introduction: string;
}

const PetSitterAbout: React.FC<PetSitterAboutProps> = () => {
  return (
    <>
      <StyledPetSitterAboutTitle>About {petSitter.firstName}</StyledPetSitterAboutTitle>
      <StyledPetSitterAboutContent
        dangerouslySetInnerHTML={{ __html: petSitter.introduction }}
      ></StyledPetSitterAboutContent>
    </>
  );
};

export default PetSitterAbout;
