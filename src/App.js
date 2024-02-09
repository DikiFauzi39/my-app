import './App.css';

import  CompanyProfile from './components/CompanyProfile'
import AboutComponent from './components/AboutComponent';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyContextProvider } from './Context';



function App() {
  const companyData = {
    name: "PT Indodev Niaga Internet",
    address: "Jl Tegal Rotan"
  };


  return (
    <MyContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/company"  element={<CompanyProfile companyData={companyData} />} />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;
