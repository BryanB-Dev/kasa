import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/style.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Infos from "./pages/Infos";
import E404 from "./pages/404";
import Datas from "./data/data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infos/:locationID" element={<Infos datas={Datas}/>} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </Router>
  );
}

export default App;
