import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const CARDS = 3; // Total de cartões no Carousel
const MAX_VISIBILITY = 3; // Quantidade máxima de cartões visíveis

const Card = ({ title, content }) => {
  return (
    <div className="card" style={cardStyle}>
      <h2 style={cardTitleStyle}>{title}</h2>
      <p style={cardContentStyle}>{content}</p>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className="carousel" style={carouselStyle}>
      {active > 0 && (
        <button
          className="nav left"
          style={navLeftStyle}
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            ...cardContainerStyle,
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right"
          style={navRightStyle}
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <footer className="footer flex flex-col items-center justify-center w-full">
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              key={i}
              title={`Card ${i + 1}`}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          ))}
        </Carousel>
      </footer>
    </div>
  );
};

// Estilos Inline
const carouselStyle = {
  position: "relative",
  width: "23rem",
  height: "23rem",
  perspective: "500px",
  transformStyle: "preserve-3d",
  margin: "0 auto",
};

const cardContainerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  transition: "all 0.3s ease-out",
};

const cardStyle = {
  width: "100%",
  height: "100%",
  padding: "2rem",
  backgroundColor: "#6B46C1",
  borderRadius: "1rem",
  textAlign: "justify",
  color: "#9CA3AF",
  transition: "all 0.3s ease-out",
};

const cardTitleStyle = {
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  margin: "0 0 0.7em",
  color: "#1F2937",
};

const cardContentStyle = {
  transition: "all 0.3s ease-out",
  opacity: "var(--active)",
};

const navLeftStyle = {
  color: "white",
  fontSize: "2rem",
  position: "absolute",
  top: "50%",
  left: "-3rem",
  zIndex: 2,
  cursor: "pointer",
  background: "none",
  border: "none",
};

const navRightStyle = {
  color: "white",
  fontSize: "2rem",
  position: "absolute",
  top: "50%",
  right: "-3rem",
  zIndex: 2,
  cursor: "pointer",
  background: "none",
  border: "none",
};

export default Footer;
