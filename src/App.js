import './App.css';
import Login from './pages/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Browse from './pages/Browse/Browse';
import Podcast from './pages/Podcast/Podcast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/podcast' element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;
