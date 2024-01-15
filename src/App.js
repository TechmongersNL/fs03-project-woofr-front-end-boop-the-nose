import "./Styles/App.css";
import "./Styles/Feedpost.css";
import "./Styles/HomePage.css";
import "./Styles/loginPage.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Homepage";
import FeedPage from "./Pages/FeedPage";
import SignUp from "./Pages/SignUp";
import LoginForm from "./Pages/loginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
