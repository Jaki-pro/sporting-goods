import { Outlet, useLocation } from "react-router-dom";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Banner from "./pages/home/banner/Banner";
import Footer from "./components/footer/Footer";

function App() {
  const path = useLocation();
  return (
    <div>
      <NavBar />
      {path.pathname === "/" && <Banner />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
