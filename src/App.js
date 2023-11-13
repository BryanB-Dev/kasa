import Link from "./components/atoms/Link";
import Host from "./components/molecules/Host";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Host />
      <Link title="link" href="/"/>
    </div>
  );
}

export default App;
