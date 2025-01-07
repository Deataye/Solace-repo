import DiscoverSection from "../components/DiscoverSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SaleSection from "../components/SaleSection";
import TopCategories from "../components/TopCategories";


function ServicesPage() {
  return (
    <>
      {/* <Navbar /> */}
       <DiscoverSection/>
       <TopCategories/>
       <SaleSection/>
       <FAQSection/>
       <Footer/>
    </>
  );
}

export default ServicesPage;
