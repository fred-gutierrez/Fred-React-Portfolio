import { ArrowBelow } from "./ArrowBelow";
import { BackgroundAnimation } from "./BackgroundAnimation";
import { ResumeDownloadButton } from "./ResumeDownloadButton";

export function Home() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     }
  //   });
  // });

  // const hiddenElements = document.querySelectorAll(".hidden");
  // hiddenElements.forEach((el) => observer.observe(el));

  // TODO: Solve the anitmations issue with: https://youtu.be/T33NN_pPeNI?t=40

  return (
    <div id="home-container" className="container">
      <div className="row">
        <div className="text-white" style={{ margin: "25vh 0 0 0" }}>
          <h1 className="fs-1 fw-bold m-0">
            Fred David
            <br />
            Solís Gutiérrez
            <br />
          </h1>
          <span id="frontEndText" className="fs-2 fw-bold">
            Front-end Developer
          </span>
          <p>
            Development of web sites and
            <br />
            applications with{" "}
            <i className="fa-brands fa-bootstrap bootstrap-color"></i>
            <span className="bootstrap-color fw-bold"> Bootstrap</span>,<br />
            <i className="fa-brands fa-react react-color"></i>
            <span className="react-color fw-bold"> React</span>,{" "}
            <i className="fa-brands fa-js javascript-color"></i>
            <span className="javascript-color fw-bold"> JavaScript</span> and
            more!
          </p>
        </div>
      </div>
      <ResumeDownloadButton />
      <ArrowBelow />
      <BackgroundAnimation />
    </div>
  );
}
