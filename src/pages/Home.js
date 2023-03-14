import HeroBanner from "../components/HeroBanner";
import Category from "../components/Category";
import NewCollection from "../components/NewCollection";
import BestSeller from "../components/BestSeller";
import EmailRegister from "../components/EmailRegister";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Category />
      <NewCollection />
      <BestSeller />
      <EmailRegister />
    </>
  );
};

export default Home;
