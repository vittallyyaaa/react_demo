import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Games from "./components/Games/Games";
import Details from "./components/Details/Details";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalIndo";
import WhatsIncluded from "./components/WhatsIncluded/WhatsIncluded";
import OtherProducts from "./components/OtherProducts/OtherProducts"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Games />
      <Details />
      <AdditionalInfo />
      <WhatsIncluded />
      <OtherProducts />
      <Footer />
    </div>
  );
}

export default App;
