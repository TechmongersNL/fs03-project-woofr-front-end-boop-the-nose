import './Styles/App.css';
import './Styles/Feedpost.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import FeedPage from './Pages/FeedPage';
import SignUpForm from './Pages/SignUp';
import LoginForm from './Pages/loginPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/feed" element={<FeedPage />} />
				<Route path="/signup" element={<SignUpForm />} />
			</Routes>
		</div>
	);
}

export default App;
