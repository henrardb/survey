import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
