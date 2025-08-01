import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./Components/Navbar";
const Docs = lazy(() => import("./Components/Docs"));
const ViewPage = lazy(() => import("./Components/ViewPage"));
const Terms = lazy(() => import("./Components/Terms"));
const Privacy = lazy(() => import("./Components/Privacy"));

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return ( 
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="/documentation" element={<Docs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
};

export default App;
