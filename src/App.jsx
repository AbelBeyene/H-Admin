import Dashboard from './components/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx'; // Corrected import path and component name
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
