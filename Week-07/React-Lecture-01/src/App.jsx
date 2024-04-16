import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";

const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar></AppNavbar>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Suspense>
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
