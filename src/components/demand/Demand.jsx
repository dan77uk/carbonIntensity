import { useState, useEffect } from "react";
import axios from "axios";
import "./demand.css";
import EnergyMix from "../energyMix/EnergyMix";

const Demand = ({ userData }) => {
  const [intensity, setIntensity] = useState({});
  const [generation, setGeneration] = useState();
  const [title, setTitle] = useState("UK Green Energy");
  const [intensityIsLoading, setIntensityIsLoading] = useState(true);
  const [generationIsLoading, setGenerationIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.carbonintensity.org.uk/intensity`)
      .then((response) => {
        setIntensity(response.data.data[0].intensity);
        setIntensityIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userData) {
      setGeneration(userData[0].generationmix);
      setTitle(`${userData[0].shortname} Green Energy`);
      setGenerationIsLoading(false);
    } else {
      axios
        .get(`https://api.carbonintensity.org.uk/generation`)
        .then((response) => {
          setGeneration(response.data.data.generationmix);
          setGenerationIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);

  if (intensityIsLoading || generationIsLoading) {
    return (
      <section className="loading">
        <p>Loading...</p>
      </section>
    );
  } else {
    const renewableCalc = (array) => {
      const renewableArray = ["wind", "solar", "hydro"];
      let count = 0;
      array.forEach((element) => {
        if (renewableArray.includes(element.fuel)) {
          count += element.perc;
        }
      });
      return Math.ceil(count);
    };

    const lowCarbonCalc = (array) => {
      const renewableArray = ["wind", "solar", "hydro", "biomass"];
      let count = 0;
      array.forEach((element) => {
        if (renewableArray.includes(element.fuel)) {
          count += element.perc;
        }
      });
      return Math.ceil(count);
    };

    const intensityWarning = (obj) => {
      if (obj.actual > obj.forecast) {
        const difference = obj.actual - obj.forecast;
        const result = Math.floor((difference / obj.forecast) * 100);
        return `${result}% above forecast`;
      }
      if (obj.actual < obj.forecast) {
        const difference = obj.forecast - obj.actual;
        const result = Math.floor((difference / obj.forecast) * 100);
        return `${result}% below forecast`;
      }
    };

    return (
      <section className="data-container">
        <article className="data-container--carbonInt">
          <h5>
            National Carbon Intensity
            <span>
              {intensity.actual}
              <span>gCO2/KWh</span>
            </span>
          </h5>
          <p className={intensity.index}>
            <span>{intensity.index}</span> {intensityWarning(intensity)}
          </p>
        </article>
        <article className="data-container--energy-mix">
          <h5>{title}</h5>
          <p>
            Renewables
            <span>
              {renewableCalc(generation)}
              <span>%</span>
            </span>
          </p>
          <p>
            Low Carbon
            <span>
              {lowCarbonCalc(generation)}
              <span>%</span>
            </span>
          </p>
        </article>
        <EnergyMix userData={generation} />
      </section>
    );
  }
};

export default Demand;
