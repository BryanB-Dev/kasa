import HostName from "./components/atoms/HostName";
import HostPicture from "./components/atoms/HostPicture";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <HostName />
      <HostPicture img="" title="title"/>
    </div>
  );
}

export default App;
