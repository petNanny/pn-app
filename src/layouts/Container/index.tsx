import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  paddingTop?: string;
}

const SessionContainer = styled.section<Pick<ContainerProps, "paddingTop">>`
  padding: 15px;
  padding-top: ${(props) => props.paddingTop};
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`;

const Container: React.FC<ContainerProps> = (props) => {
  const { children, paddingTop = "40px" } = props;
  return (
    <SessionContainer paddingTop={paddingTop}>
      <Content>{children}</Content>
    </SessionContainer>
  );
};

export default Container;
