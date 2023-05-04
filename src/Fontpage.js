import CallToAction from "./components/CallToAction";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import WhyUs from "./components/whyus";
function Frontpage() {
  return (
    <>
      <Hero />
      <div id="main">
        <WhyUs />
        <Services />
        <CallToAction />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
export default Frontpage;
