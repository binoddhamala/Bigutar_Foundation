
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import AdminUploadForm from './Admin/AdminUploadForm';
import Event from './Pages/Event';
import UploadNews from './Admin/UploadNews';
import Member from './Pages/Member';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/becomemember" element={<Member/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/member" element={<AdminUploadForm/>}/>
          <Route path="/events" element={<Event/>}/>
          <Route path="/uploadnews" element={<UploadNews/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
