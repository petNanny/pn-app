import { Spinner, Flex } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAdminAuth";

const AdminAuthRoute = ({
  children,
  authRequired,
}: {
  children: JSX.Element;
  redirect?: boolean;
  authRequired?: boolean;
}): JSX.Element => {
  const currentAdminId = localStorage.getItem("currentAdminId") ?? "";
  const { auth, isLoadingAuth } = useAdminAuth(currentAdminId);

  if (isLoadingAuth) {
    return (
      <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xxl"
          margin="auto"
        />
      </Flex>
    );
  }

  if (authRequired) {
    return auth ? children : <Navigate to="/adminLogin" replace />;
  }

  return children;
};

export default AdminAuthRoute;
