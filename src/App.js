import './App.css';
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import WebSocketApp from './webSocketApp/WebSocketApp';
import Test from './test/test';
import Login from "./login/Login";
import MapComponent from "./map/MapComponent";
import MapMarking from "./map/MapComponentMarking";
import MapMarkingLine from "./map/MarkingLine";
import SideMenu from "./sideMenu/LeftMenu"; // SideMenu 추가

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 사이드 메뉴 */}
        <SideMenu />

        {/* 상단 네비게이션 */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/test">test</Link>
          <Link to="/login">login</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/MapComponent">MapComponent</Link>
          <Link to="/MapMarking">MapMarking</Link>
          <Link to="/MapMarkingLine">MapMarkingLine</Link>
        </nav>

        {/* 라우터 설정 */}
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/test" element={<Test />} /> 
          <Route path="/contact" element={<WebSocketApp />} />
          <Route path="/MapComponent" element={<MapComponent />} /> 
          <Route path="/MapMarking" element={<MapMarking />} /> 
          <Route path="/MapMarkingLine" element={<MapMarkingLine />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;