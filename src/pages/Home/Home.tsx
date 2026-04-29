import Hero from "../../components/Hero/Hero";
import Details from "../../components/Details/Details";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalIndo";
import WhatsIncluded from "../../components/WhatsIncluded/WhatsIncluded";
import OtherProducts from "../../components/OtherProducts/OtherProducts";

function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <AdditionalInfo />
      <WhatsIncluded />
      <OtherProducts />
    </main>
  );
}

export default Home;