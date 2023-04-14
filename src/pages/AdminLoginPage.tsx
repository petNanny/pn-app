import React from "react";
import AdminPageLayout from "../components/Layout/AdminPageLayout";
import { Stack, Container, Box, Divider } from "@chakra-ui/react";
import AdminLogin from "../components/AdminLogin/AdminLogin";

const AdminLoginPage = () => {
  return (
    <AdminPageLayout>
      <Container maxWidth="5xl" display="flex" justifyContent="center" padding="4" marginBottom="4">
        <Stack display="flex" flexDirection="column" alignItems="center">
          <Divider paddingY="4" />
          <Box paddingTop="3">
            <AdminLogin />
          </Box>
          <Divider paddingY="4" />
        </Stack>
      </Container>
    </AdminPageLayout>
  );
};

export default AdminLoginPage;
