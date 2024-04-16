import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar></AppNavbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppNavbar() {
  const navigator = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigator("dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigator("/");
          }}
        >
          Landing
        </button>
      </div>
    </div>
  );
}

export default App;
