import { Route, Routes } from "react-router-dom";
import DCisScouting from "../pages/DCisScouting";
import WeAreDCisGlobal from "../pages/WeAreDCisGlobal";
import DCisStandard from "../pages/DCisStandard";
import DCisTeams from "../pages/DCisTeams";
import DCisPartners from "../pages/DCisPartners";
import DCisJobs from "../pages/DCISJobs";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeAreDCisGlobal />} />
        <Route path="/standard" element={<DCisStandard />} />
        <Route path="/teams" element={<DCisTeams />} />
        <Route path="/scouting" element={<DCisScouting />} />
        <Route path="/jobs" element={<DCisJobs />} />
        <Route path="/partners" element={<DCisPartners />} />
      </Routes>
    </>
  );
};

export default Router;
