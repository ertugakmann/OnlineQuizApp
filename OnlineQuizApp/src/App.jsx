import CreatePage from "./components/CreatePage/CreatePage";
import Home from "./components/HomePage/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
