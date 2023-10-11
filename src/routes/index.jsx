import { Route, Routes } from "react-router-dom";
import DCISJobs from "../pages/DCISJobs";
import DCisScouting from "../pages/DCisScouting";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/jobs" element={<DCISJobs />} />
        <Route path="/scouting" element={<DCisScouting />} />
      </Routes>
    </>
  );
};

export default Router;
