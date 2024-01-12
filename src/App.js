import "./Styles/App.css";
import "./Styles/Feedpost.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Homepage";
import FeedPage from "./Pages/FeedPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feed" element={<FeedPage />} />
      </Routes>
    </div>
  );
}

export default App;
