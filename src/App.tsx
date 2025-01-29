import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Docs = lazy(() => import("./Components/Docs"));
import Loading from "./Components/Loading";
const ViewPage = lazy(() => import("./Components/ViewPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewPage />} />
          <Route path="/documentation" element={<Docs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
