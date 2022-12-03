import { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";
const Search = ({ setUserRegionData }) => {
  const [regionalMix, setRegionalMix] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.carbonintensity.org.uk/regional`)
      .then((response) => {
        setRegionalMix(response.data.data[0].regions);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setUserRegionData(
      regionalMix.filter((region) => {
        return region.dnoregion === event.target.value;
      })
    );
  };
  return (
    <section className="search-form-container">
      <h5>Regional Carbon Intensity</h5>
      <select onChange={handleChange}>
        {isLoading ? (
          <option>Loading regions...</option>
        ) : (
          regionalMix.map((region) => {
            return (
              <option key={region.regionid} value={region.dnoregion}>
                {region.dnoregion}
              </option>
            );
          })
        )}
      </select>
    </section>
  );
  // }
};

export default Search;
