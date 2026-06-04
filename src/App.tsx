import { Route, Routes } from "react-router";

import Home from "./pages/Home/page";
import Library from "./pages/Library/page";
import Practice from "./pages/Practice/page";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="practice" element={<Practice />} />
      </Route>
    </Routes>
  );
}

export default App;
