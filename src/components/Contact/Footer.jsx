import BootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import ReactLogo from "/src/images/skills/react-icon.png";
import SassLogo from "/src/images/skills/sass-logo.webp";

export function Footer() {
  return (
    <footer className="pt-5 bg-black">
      <div className="container">
        <div id="social-media" className="row">
          <div className="col-12 d-flex justify-content-center">
            <a
              href="https://www.instagram.com/fredwilliamszy/"
              className="slide-top"
              target="_blank"
              aria-label="Instagram Link"
            >
              <i className="fa-brands fa-instagram fa-3x"></i>
              <br />
            </a>
            <a
              href="https://github.com/fred-gutierrez"
              className="slide-top mx-3"
              target="_blank"
              aria-label="Github Link"
            >
              <i className="fa-brands fa-github fa-3x"></i>
              <br />
            </a>
            <a
              href="https://www.linkedin.com/in/fred-david-solis-gutierrez-b0a51b1a8"
              className="slide-top"
              target="_blank"
              aria-label="LinkedIn Link"
            >
              <i className="fa-brands fa-linkedin fa-3x"></i>
              <br />
            </a>
          </div>
          <p className="col-12 text-center pb-4 pt-4 fs-6 text-muted">
            Built with <img src={ReactLogo} width="40px" alt="React Logo" />,{" "}
            <img src={SassLogo} alt="Sass Logo" width="40px" /> and{" "}
            <img src={BootstrapLogo} width="40px" alt="Bootstrap Logo" />{" "}
            <span className="bootstrap-color">5</span> by{" "}
            <a className="text-decoration-none text-muted" href="#home">
              Fred David Solís Gutiérrez
            </a>{" "}
            | 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
