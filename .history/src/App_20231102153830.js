import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import General from './Pages/General';
import GeneralEdit1 from './manager/main/Ojects/Ojects-edit';
import Manager from './manager/main/manager';
import Login from './manager/Login';
import GeneralEdit2 from './manager/main/Ojects/Object-edit2';
import GeneralEdit3 from './manager/main/Ojects/Object-edit3';
import GeneralEdit4 from './manager/main/Ojects/Object-edit4';
import GeneralEdit5 from './manager/main/Ojects/Object-edit5';
import GeneralEdit6 from './manager/main/Ojects/Object-edit6';
import Contacts from './Pages/Contacts';
import Numbers from './manager/Numbers';
import About from './Pages/About';
import Page1 from './Pages/Objects/Page1';
import Page2 from './Pages/Objects/Page2';
import Page3 from './Pages/Objects/Page3';
import Page4 from './Pages/Objects/Page4';
import Page5 from './Pages/Objects/Page5';
import Page6 from './Pages/Objects/Page6';
import Page7 from './Pages/Objects/Page7';
import Page8 from './Pages/Objects/Page8';
import Object from './Pages/Objects';




const Home = () => {
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(true);

  useEffect(() => {
    if (isPaid && window.location.pathname === "/") { 
      navigate("/general"); 
    }
  }, [isPaid, navigate]);

}


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/general"          element={<General/>} />
        <Route path="/object"          element={<Object/>} />
        <Route path="/contacts"         element={<Contacts/>} />
        <Route path="/numbers"          element={<Numbers/>} />
        <Route path="/about"            element={<About />} />
        <Route path="/page/id-1"           element={<Page1 />} />
        <Route path="/page/id-2"           component={<Page2 />} />
        <Route path="/page/id-3"           element={<Page3 />} />
        <Route path="/page/id-4"           element={<Page4 />} />
        <Route path="/page/id-5"           element={<Page5 />} />
        <Route path="/page/id-6"           element={<Page6 />} />
        <Route path="/page/id-7"           element={<Page7 />} />
        <Route path="/page/id-8"           element={<Page8 />} />
        <Route path='/general-edit-id1' element={<GeneralEdit1 />} />
        <Route path='/general-edit-id2' element={<GeneralEdit2 />} />
        <Route path='/general-edit-id3' element={<GeneralEdit3 />} />
        <Route path='/general-edit-id4' element={<GeneralEdit4 />} />
        <Route path='/general-edit-id5' element={<GeneralEdit5 />} />
        <Route path='/general-edit-id6' element={<GeneralEdit6 />} />
        <Route path="/login"            component={Login} />
        <Route exact path='/manager'    element={<Manager />} />
      </Routes>
    <Home />
    </BrowserRouter>
  );
}

export default App;
