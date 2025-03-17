import HomeNewsSection from "../components/homePage/news/HomeNews";
import { NewsLetter } from "../components/homePage/Newsletter";
import Footer from "../components/extras/Footer";


function Home() {

  return (
    <>
      <HomeNewsSection />
      <NewsLetter/>
      <Footer />
    </>
  );
}
export default Home;
