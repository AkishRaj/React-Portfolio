// src/App.jsx

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjectCard from "./components/ProjectCard";

// and use <ProjectCard /> as before inside your Projects section

import akiImage from "./assets/aki1.jpg";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="text-center d-flex flex-column justify-content-center align-items-center vh-100 text-white"
        style={{ background: "linear-gradient(135deg, #000000, #333333)" }}
      >
        <h1 className="display-4 hero-animate" style={{ animationDelay: "0.3s" }}>
          Akish Raj
        </h1>
        <p className="lead hero-animate" style={{ animationDelay: "0.6s" }}>
          Frontend Developer | Web Developer
        </p>
      </section>

      <section id="about" className="bg-dark text-white">
        <div className="container-fluid px-0">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row fs-4 px-3">
            <div className="col-md-7 ps-md-5">
              <p>
                Hello! I'm <strong>Akish Raj</strong>, a dedicated Computer Science
                Engineering student specializing in <strong>Cyber Security and IoT</strong>. I’m
                passionate about securing digital systems, building smart
                applications, and staying ahead in the evolving world of
                technology. Currently, I’m enhancing my skills in
                <strong> full-stack web development</strong>. Whether it's writing clean
                code, solving challenges on HackTheBox, or building secure web
                apps, I enjoy turning complex problems into smart and elegant
                solutions.
              </p>
              <p>
                I'm a fast learner, open to collaboration, and constantly pushing
                myself to grow. Let’s connect and build something amazing
                together!
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={akiImage}
                alt="Akish Raj"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

      </section>

     <section id="project" className="bg-dark">
  <div className="container-fluid px-0">
    <div className="row text-center mb-3">
      <div className="col">
        <h2 style={{ color: "aliceblue" }}>Projects</h2>
      </div>
    </div>
    <div className="row justify-content-center px-3">
      {[
        {
          title: "",
          github: "https://github.com/yourusername/malware-analysis",
        },
     
      ].map(({ title, github }, idx) => (
        <ProjectCard key={idx} title={title} github={github} />
      ))}
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
    <path
      fill="#fffff"
      fillOpacity="1"
      d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L0,320Z"
    ></path>
  </svg>
</section>

      <footer className="bg-black text-white text-center pb-5">
        <p>
          Created by{" "}
          <a
            href="https://www.instagram.com/akish_raj/"
            className="text-white fw-bold" 
          >
            Akish Raj
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
