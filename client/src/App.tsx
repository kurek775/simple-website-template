import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pages } from "./config/emperor";
function App() {
  return (
    <Router>
      <Routes>
        {pages.map((item) => (
          <Route
            path={item.url}
            element={
              item.variantProps.variant === "home" ? (
                <Home {...item} />
              ) : (
                <Presentation {...item} />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
