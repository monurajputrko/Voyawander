import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import "./Components/common-styles/index.css";
import AllRoutes from "./Routes/AllRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isWhite = location.pathname !== "/" ? true : false;

  return (
    <>
      <div className="App">
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Navbar isWhiteBackground={isWhite} isOfferVisible={!isWhite} />
        )}
        <AllRoutes />
      </div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  );
}

export default App;
