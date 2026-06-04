import { Route, Routes } from "react-router";

import Home from "./pages/Home/page";
import Library from "./pages/Library/page";
import Practice from "./pages/Practice/page";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./utils/consts/routes";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.LIBRARY} element={<Library />} />
        <Route path={ROUTES.PRACTICE} element={<Practice />} />
      </Route>
    </Routes>
  );
}

export default App;
