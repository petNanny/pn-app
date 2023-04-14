import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminFooter from "../AdminFooter/AdminFooter";
import { Box } from "@chakra-ui/react";

const AdminPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminNavbar />
      <Box minHeight="400px">{children}</Box>
      <AdminFooter />
    </>
  );
};

export default AdminPageLayout;
