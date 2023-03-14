import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import StyledNavBar from "./StyledNavBar";

const Layout = () => {
  return (
    <>
      <StyledNavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
