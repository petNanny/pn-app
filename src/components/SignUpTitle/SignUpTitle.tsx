import { StyledSignUpTitle, StyledSignUpSecondaryTitle } from "./styledSignUpTitle";

const SignUpTitle = () => {
  return (
    <>
      <StyledSignUpTitle>Sign up for PetNanny</StyledSignUpTitle>
      <StyledSignUpSecondaryTitle>{`It's free!`}</StyledSignUpSecondaryTitle>
    </>
  );
};

export default SignUpTitle;
