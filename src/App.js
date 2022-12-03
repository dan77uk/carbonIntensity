import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Demand from "./components/demand/Demand";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import { useState } from "react";

const App = () => {
  const [userRegionData, setUserRegionData] = useState();

  return (
    <main>
      <Header />
      <Welcome />
      <Search setUserRegionData={setUserRegionData} />
      <Demand userData={userRegionData} />
      <Footer />
    </main>
  );
};

export default App;
