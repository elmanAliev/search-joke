import { Route, Routes } from "react-router-dom";
import { JokesPage } from "../pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JokesPage />} />
    </Routes>
  );
};

export default App;
