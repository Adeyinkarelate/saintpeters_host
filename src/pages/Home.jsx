
import Objectives from "../components/Objectives";
import Chairman from "../components/Chairman";
import Triumphant from "../components/Triumphant";
import CharritySection from "../components/CharritySection";
import Banner2 from "../components/Banner2";
import Banner from "../components/Banner";



const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner2 />
      <Chairman />
      <Objectives />
      <CharritySection />
      <Triumphant/>
    </div>
  );
};

export default Home;
