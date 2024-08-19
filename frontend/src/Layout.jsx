import Header from "./components/Header";
import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
