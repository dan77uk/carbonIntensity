import "./footer.css";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <p>
        Data provided by the{" "}
        <a href="https://api.carbonintensity.org.uk/" target="blank">
          National Grid Carbon Intensity API
        </a>
      </p>
      <p>
        &copy; Dan Phillips {year} |{" "}
        <a href="https://github.com/dan77uk" target="blank">
          Github
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/dan-phillips-845a1b205/"
          target="blank"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
