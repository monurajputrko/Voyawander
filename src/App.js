import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import "./Components/common-styles/index.css";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar isOfferVisible={true} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
