import JobsProvider from "./context/JobsProvider";
import DCISJobs from "./pages/DCISJobs";
/* import DCisScouting from "./pages/DCisScouting"; */

function App() {
  return (
    <JobsProvider>
      <div className="App">
        {/* <DCisScouting /> */}
        <DCISJobs />
      </div>
    </JobsProvider>
  );
}

export default App;
