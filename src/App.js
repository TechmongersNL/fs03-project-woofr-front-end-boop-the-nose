import "./Styles/App.css";
import "./Styles/Feedpost.css";
import { Routes, Route } from "react-router-dom";


import HomePage from "./Pages/Homepage";
import FeedPage from "./Pages/FeedPage";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
