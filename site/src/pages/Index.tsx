import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import SocialActions from "@/components/SocialActions";
import PrivateEvents from "@/components/PrivateEvents";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Menu />
        <SocialActions />
        <PrivateEvents />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
