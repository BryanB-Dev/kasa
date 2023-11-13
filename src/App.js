import Host from "./components/molecules/Host";
import Navbar from "./components/molecules/Navbar";
import Header from "./components/organisms/Header";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Host />
      <Header />
    </div>
  );
}

export default App;
