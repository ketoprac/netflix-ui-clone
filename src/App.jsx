import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Subscribe from "./components/Subscribe";
import Popular from "./components/Popular";
import Splash from "./components/Splash";
import Layout from "./components/Layout";
import Package from "./components/Package";
import NetflixIcon from "./assets/icon/netflix_icon.svg";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content="Netflix UI Clone" />
        <meta name="keywords" content="Netflix, Netflix Clone, UI Clone" />
        <meta name="author" content="Hafiedz Mada" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Netflix Indonesia - Watch TV Shows Online, Watch Movies Online
        </title>
        <link rel="icon" href={NetflixIcon} />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Splash />
      <Popular />
      <Package />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

export default App;
