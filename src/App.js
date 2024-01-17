import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Mainpage from "./pages/mainPage/index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
