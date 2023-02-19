import { StyledStrategiesButton, StyledStrategiesTextBox } from "./styledStrategiesLoginButton";
type Props = {
  icon: JSX.Element;
  backgroundColor: string;
  strategyName: string;
  color: string;
};

const StrategiesLoginButton: React.FC<Props> = ({ icon, backgroundColor, strategyName, color }) => {
  return (
    <StyledStrategiesButton
      leftIcon={icon}
      backgroundColor={backgroundColor}
      color={color}
      boxShadow="md"
      data-testid="strategiesLoginButton"
    >
      <StyledStrategiesTextBox>Continue with {strategyName}</StyledStrategiesTextBox>
    </StyledStrategiesButton>
  );
};

export default StrategiesLoginButton;
