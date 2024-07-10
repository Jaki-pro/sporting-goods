import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
