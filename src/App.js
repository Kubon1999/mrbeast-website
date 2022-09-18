import "./App.css";
import TopBanner from "./sections/TopBanner";
import PageNavbar from "./sections/PageNavbar.js";
import TopBannerDetails from "./sections/TopBannerDetails";
import FontStyles from "./utils/FontStyles";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <FontStyles></FontStyles>
      <PageNavbar></PageNavbar>
      <TopBanner></TopBanner>
    </div>
  );
}

export default App;
