import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import RegisterScreen from "./Pages/RegisterScreen";
import LoginScreen from "./Pages/LoginScreen";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path="blogs" element={<HowItWorks />} />
        <Route path="contact" element={<Faq />} /> 
        <Route path="contact" element={<Contact />} /> 
       <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
