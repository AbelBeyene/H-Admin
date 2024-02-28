import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx'; 
import Setting from './pages/Setting.jsx';
import ExportPage from './pages/Exportpage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LanguageSetting from './pages/settings/LanguageSetting.jsx';


const App = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/languageSetting" element={<LanguageSetting />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
