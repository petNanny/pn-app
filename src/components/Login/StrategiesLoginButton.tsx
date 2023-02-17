import { Box, Button } from "@chakra-ui/react";

type Props = {
  icon: JSX.Element;
  backgroundColor: string;
  strategyName: string;
  color: string;
};

const StrategiesLoginButton: React.FC<Props> = ({ icon, backgroundColor, strategyName, color }) => {
  return (
    <Button
      leftIcon={icon}
      backgroundColor={backgroundColor}
      color={color}
      variant="strategiesLoginButton"
      data-testid="strategiesLoginButton"
    >
      <Box flexGrow={1}>Continue with {strategyName}</Box>
    </Button>
  );
};

export default StrategiesLoginButton;
