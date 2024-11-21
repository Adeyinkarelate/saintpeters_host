
import Objectives from "../components/Objectives";
import Chairman from "../components/Chairman";
import Triumphant from "../components/Triumphant";
import CharritySection from "../components/CharritySection";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      <Chairman />
      <Objectives />
      <CharritySection />
      <Triumphant/>
    </div>
  );
};

export default Home;
