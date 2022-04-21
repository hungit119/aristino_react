import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import { HeaderTop } from "./components/header";
import { HeaderSection } from "./components/header-section";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderSection />
    </div>
  );
}

export default App;
