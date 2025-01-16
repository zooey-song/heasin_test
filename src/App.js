import './App.css';
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
// import Home from ""
// import About from ""
// import Contact from ""
import WebSocketApp from './webSocketApp/WebSocketApp';
import Test from './test/test';
import Login from "./login/Login"
import MapComponent from "./map/MapComponent"
function HTMLPage() {
  return (
    <div>
      <iframe
        src="/WebSocket.html" // public 폴더 기준 경로
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="External HTML"
      />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav>
          <Link to="/">Home</Link>
          <Link to="/test">test</Link>
          <Link to="/login">login</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/MapComponent">MapComponent</Link>
        </nav>
        <Routes>
          {/* <Route path="/" element={< home/>} /> */}

          
          <Route path="/login" element={<Login />} /> 
          <Route path="/test" element={<Test />} /> 
          <Route path="/contact" element={<WebSocketApp />} />
          <Route path="/html" element={<HTMLPage />} />
          <Route path="/MapComponent" element={<MapComponent />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
