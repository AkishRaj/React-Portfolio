// ProjectCard.jsx
import React, { useState, useEffect, useRef } from "react";
import "./ProjectCard.css";

// Import local images
import malwareImg from "../assets/malware.jpeg";
import musicImg from "../assets/music.png";
import Todolist from "../assets/todolist.png";


const projects = [
  {
    title: "Malware Analysis and Detection",
    image: malwareImg,
    github: "https://github.com/AkishRaj/AkishRaj-Malicious-and-Normal-Traffic-Interpretation",
  },
  {
    title: "E-commerce webpage",
    image: "ecommerceImg",
    github: "https://github.com/AkishRaj/E-commerce_web",
  },
  {
    title: "Parallax Scrolling Demo",
    image: "parallaxImg",
    github: "https://github.com/AkishRaj/parallax-scrolling-web-demo",
  },
  {
    title: "To-Do List",
    image: Todolist,
    github: "https://github.com/AkishRaj/To-Do-List",
  },
  {
    title: "Music Player Demo",
    image: musicImg,
    github: "https://github.com/AkishRaj/Music_webpage",
  },
  {
    title: "Portfolio",
    image: "portfolioImg",
    github: "https://github.com/AkishRaj/portfolio",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState({});
  const isAnimating = useRef(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    const len = projects.length;
    setCurrentIndex((newIndex + len) % len);
    setTimeout(() => {
      isAnimating.current = false;
    }, 800);
  };

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };

  // Auto Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getClass = (i) => {
    const len = projects.length;
    const offset = (i - currentIndex + len) % len;
    if (offset === 0) return "card center";
    if (offset === 1) return "card right-1";
    if (offset === 2) return "card right-2";
    if (offset === len - 1) return "card left-1";
    if (offset === len - 2) return "card left-2";
    return "card hidden";
  };

  return (
    <section className="project-carousel-wrapper">
      
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>
          ‹
        </button>
        <div className="carousel-track">
          {projects.map((p, i) => (
            <div key={i} className={getClass(i)} data-index={i}>
              <div className="card-content">
                <h2 className="card-title">{p.title}</h2>
                <img src={p.image} alt={p.title} className="card-image" />
                <div className="button-group">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <button
                    className="btn btn-danger heart-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(i);
                    }}
                  >
                    <i className="bi bi-heart-fill heart-animate"></i> {likes[i] || 0}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>
          ›
        </button>
      </div>
      <div className="dots">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => updateCarousel(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
