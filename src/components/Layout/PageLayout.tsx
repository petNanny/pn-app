import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@chakra-ui/react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box minHeight="400px">{children}</Box>
      <Footer />
    </>
  );
};

export default PageLayout;
