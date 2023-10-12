import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeaderTitles from "../components/Titles/HeaderTitles";

const WeAreDCisGlobal = () => {
  return (
    <div>
      <Navbar />
      <HeaderTitles
        mainTitle="We are #DCisGlobal"
        subTitle="Tenemos el equipo que buscas #DCisDevTeam"
      />
      <Footer />
    </div>
  );
};

export default WeAreDCisGlobal;
