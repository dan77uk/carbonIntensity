import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Demand from "./components/demand/Demand";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [userRegionData, setUserRegionData] = useState();

  return (
    <main>
      <Header setUserRegionData={setUserRegionData} />
      <Welcome />
      <Demand userData={userRegionData} setUserRegionData={setUserRegionData} />
      <Footer />
    </main>
  );
};

export default App;
