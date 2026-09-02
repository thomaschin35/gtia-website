import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Footer } from "../components/home";
import {
  WhoWeAre,
  Mission,
  ExecutiveBoard,
  Committees,
} from "../components/about";

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="about min-h-screen bg-white font-sans text-ink">
      <Nav />
      <WhoWeAre />
      <Mission />
      <ExecutiveBoard />
      <Committees />
      <Footer />
    </div>
  );
};

export default About;
