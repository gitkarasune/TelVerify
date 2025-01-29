import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Docs = lazy(() => import("./Components/Docs"));
import Loading from "./Components/Loading";
const ViewPage = lazy(() => import("./Components/ViewPage"));
const Terms = lazy(() => import("./Components/Terms"));
const Privacy = lazy(() => import("./Components/Privacy"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewPage />} />
          <Route path="/documentation" element={<Docs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
