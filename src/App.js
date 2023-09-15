import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import "./Components/common-styles/index.css";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar isOfferVisible={true} />
      <AllRoutes />
      
    </div>
  );
}

export default App;
