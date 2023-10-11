import JobsProvider from "./context/JobsProvider";
import Router from "./routes";

function App() {
  return (
    <JobsProvider>
      <div className="App">
        <Router />
      </div>
    </JobsProvider>
  );
}

export default App;
