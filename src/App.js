import "./App.css";
import Footer from "./Components/footer/Footer";
import "./Components/common-styles/index.css";
import AllRoutes from "./Routes/AllRoutes";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
function App() {
  const location = useLocation();
  const isWhite = location.pathname !== "/" ? true : false;

  return (
    <>
      <div className="App">
        {location.pathname !== "/login" && (
          <Navbar isWhiteBackground={isWhite} isOfferVisible={!isWhite} />
        )}
        <AllRoutes />
      </div>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

export default App;
