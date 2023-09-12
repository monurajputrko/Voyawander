import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import "./Components/common-styles/index.css";

function App() {
  return (
    <div className="App">
      <Navbar isOfferVisible={true} />
    </div>
  );
}

export default App;
