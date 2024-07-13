import { Outlet, useLocation } from "react-router-dom";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Banner from "./pages/home/banner/Banner";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  const path = useLocation();
  return (
    <div className="">
      <NavBar />
      {path.pathname === "/" && <Banner />}
      {path.pathname === "/" && (
        <Container>
          <Home />
        </Container>
      )}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
