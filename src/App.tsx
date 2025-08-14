import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const ViewPage = lazy(() => import("./Components/ViewPage"));

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {

  return ( 
    <>
      <Routes>
        <Route path="/" element={<ViewPage />} />
      </Routes>
    </>
  );
};

export default App;
