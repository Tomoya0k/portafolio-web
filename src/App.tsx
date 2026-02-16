import { HomePage } from "./pages/HomePage";
import ProjectPowerBI from "./pages/ProjectPowerBI";

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/projects/powerbi") {
    return <ProjectPowerBI />;
  }

  return <HomePage />;
}

export default App;
