import "./energyMix.css";

const EnergyMix = ({ userData }) => {
  return (
    <article className="energy-mix">
      <ul>
        {userData.map((source) => {
          if (source.perc > 0) {
            return (
              <li key={source.fuel} className={source.fuel}>
                <p>
                  {source.fuel}
                  <span>{source.perc}%</span>
                </p>
                <div className="bar-chart-container">
                  <div style={{ width: `${source.perc}%` }}></div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </article>
  );
};

export default EnergyMix;
