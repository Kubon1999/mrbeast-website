import "./App.css";
import TopBanner from "./sections/TopBanner";
import PageNavbar from "./sections/PageNavbar.js";
import FontStyles from "./utils/FontStyles";
import About from "./sections/About/About";
import Creators from "./sections/Creators/Creators";
import Footer from "./sections/Footer/Footer";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <FontStyles></FontStyles>

      <PageNavbar></PageNavbar>
      <TopBanner></TopBanner>
      <About></About>
      <Creators></Creators>
      <Footer></Footer>
    </div>
  );
}

export default App;
