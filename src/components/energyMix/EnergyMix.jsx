import "./energyMix.css";
import Search from "../search/Search";

const EnergyMix = ({ userData, setUserRegionData }) => {
  return (
    <article className="energy-mix">
      <Search setUserRegionData={setUserRegionData} />
      <ul>
        {userData.map((source) => {
          return source.perc > 0 ? (
            <li key={source.fuel} className={source.fuel}>
              <p>
                {source.fuel}
                <span>{source.perc}%</span>
              </p>
              <div className="bar-chart-container">
                <div style={{ width: `${source.perc}%` }}></div>
              </div>
            </li>
          ) : null;
        })}
      </ul>
    </article>
  );
};

export default EnergyMix;
