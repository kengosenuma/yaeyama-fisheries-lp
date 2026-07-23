import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Fishery from "@/components/Fishery";
import ProductionArea from "@/components/ProductionArea";
import FerryInfo from "@/components/FerryInfo";
import SNSLinks from "@/components/SNSLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Fishery />
        <ProductionArea />
        <FerryInfo />
        <SNSLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
