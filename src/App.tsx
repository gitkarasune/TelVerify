import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
const Docs = lazy(() => import("./Components/Docs"));
import ChatbotPopup from "./Components/Chatbot";
import Loading from "./Components/Loading";
const ViewPage = lazy(() => import("./Components/ViewPage"));
const Terms = lazy(() => import("./Components/Terms"));
const Privacy = lazy(() => import("./Components/Privacy"));

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
      <ChatbotPopup />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewPage />} />
          <Route path="/documentation" element={<Docs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
