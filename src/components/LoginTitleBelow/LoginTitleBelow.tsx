import { StyledLoginBelowTitle, StyledLoginBelowSecondaryTitle } from "./styledLoginTitleBelow";
import { useNavigate } from "react-router-dom";
const LoginTitleBelow = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledLoginBelowTitle>Not signed up on Pawshake yet?</StyledLoginBelowTitle>
      <StyledLoginBelowSecondaryTitle onClick={() => navigate("/register")}>
        Sign up
      </StyledLoginBelowSecondaryTitle>
    </>
  );
};
export default LoginTitleBelow;
