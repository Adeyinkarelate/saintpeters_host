import Banner from "../components/Banner";
import Objectives from "../components/Objectives";
import Chairman from "../components/Chairman";
import Triumphant from "../components/Triumphant";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Chairman />
      <Objectives />
      <Triumphant/>
    </div>
  );
};

export default Home;
