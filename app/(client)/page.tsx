import About from "./components/layout/about/about";
import ContactForm from "./components/layout/contact-form/contact-form";
import HeroBanner from "./components/layout/hero-banner/hero-banner";
import Services from "./components/layout/services/services";
import Testimonials from "./components/layout/testimonials/testimonials";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <Testimonials/>
      <About />
      <ContactForm />
    </>
  )

};

export default Home;