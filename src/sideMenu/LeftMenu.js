import React, { useState } from "react";
import "./LeftSideMenu.css"; // 스타일링을 위한 CSS 파일

const LeftMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        {/* 오버레이 */}
        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
  
        <div className="side-menu-container">
          {/* 햄버거 버튼 */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
  
          {/* 사이드 메뉴 */}
          <div className={`side-menu ${isOpen ? "open" : "closed"}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };


 export default LeftMenu;