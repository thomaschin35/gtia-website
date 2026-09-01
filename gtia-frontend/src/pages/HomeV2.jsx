import { Nav, Hero, Mission, UpcomingEvents, Questions, Testimonials, Alumni, Footer } from "../components/home-v2";

const HomeV2 = () => {
  return (
    <div className="home-v2 min-h-screen bg-white font-sans text-ink">
      <Nav />
      <Hero />
      <Mission />
      <UpcomingEvents />
      <Questions />
      <Testimonials />
      <Alumni />
      <Footer />
    </div>
  );
};

export default HomeV2;
