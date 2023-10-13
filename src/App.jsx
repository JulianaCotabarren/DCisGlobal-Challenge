import JobsProvider from "./context/JobsProvider";
import Router from "./routes";

function App() {
  return (
    <JobsProvider>
      <Router />
    </JobsProvider>
  );
}

export default App;
