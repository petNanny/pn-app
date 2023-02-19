import { StyledSignUpBelowTitle, StyledSignUpBelowSecondaryTitle } from "./styledSignUpTitleBelow";
import { useNavigate } from "react-router-dom";
const SignUpTitleBelow = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledSignUpBelowTitle>Already have a Pawshake account?</StyledSignUpBelowTitle>
      <StyledSignUpBelowSecondaryTitle onClick={() => navigate("/login")}>
        Login
      </StyledSignUpBelowSecondaryTitle>
    </>
  );
};
export default SignUpTitleBelow;
