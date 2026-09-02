import { Nav, Hero, Mission, UpcomingEvents, Questions, Testimonials, Alumni, Footer } from "../components/home";

const Home = () => {
  return (
    <div className="home min-h-screen bg-white font-sans text-ink">
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

export default Home;
