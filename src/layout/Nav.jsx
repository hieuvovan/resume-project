import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="pl-10 py-3 flex cursor-pointer" to="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="#6d7178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="pl-2 text-base nav-content">Home</p>
          </Link>
        </li>
        <li className="nav-item">
        <Link className="pl-10 py-3 flex cursor-pointer" to="/about-me">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#6d7178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#6d7178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="pl-2 text-base nav-content">About me</p>
        </Link>
        </li>
        <li className="pl-10 py-3 flex cursor-pointer nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13V11ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11V13ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17V15ZM15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15V17ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13V11ZM9.01 13C9.56228 13 10.01 12.5523 10.01 12C10.01 11.4477 9.56228 11 9.01 11V13ZM9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17V15ZM9.01 17C9.56228 17 10.01 16.5523 10.01 16C10.01 15.4477 9.56228 15 9.01 15V17ZM18 7V19H20V7H18ZM17 20H7V22H17V20ZM6 19V7H4V19H6ZM7 6H9V4H7V6ZM15 6H17V4H15V6ZM7 20C6.44772 20 6 19.5523 6 19H4C4 20.6569 5.34315 22 7 22V20ZM18 19C18 19.5523 17.5523 20 17 20V22C18.6569 22 20 20.6569 20 19H18ZM20 7C20 5.34315 18.6569 4 17 4V6C17.5523 6 18 6.44772 18 7H20ZM6 7C6 6.44772 6.44772 6 7 6V4C5.34315 4 4 5.34315 4 7H6ZM12 13H15V11H12V13ZM12 17H15V15H12V17ZM11 4H13V2H11V4ZM13 6H11V8H13V6ZM11 6C10.4477 6 10 5.55228 10 5H8C8 6.65685 9.34315 8 11 8V6ZM14 5C14 5.55228 13.5523 6 13 6V8C14.6569 8 16 6.65685 16 5H14ZM13 4C13.5523 4 14 4.44772 14 5H16C16 3.34315 14.6569 2 13 2V4ZM11 2C9.34315 2 8 3.34315 8 5H10C10 4.44772 10.4477 4 11 4V2ZM9 13H9.01V11H9V13ZM9 17H9.01V15H9V17Z" fill="#6d7178"/>
          </svg>
          <p className="pl-2 text-base nav-content">Resume</p>
        </li>
        <li className="pl-10 py-3 flex cursor-pointer nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.8173 15 5.7793 14.3805 3 13.2554M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M12 12H12.01M5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20Z" stroke="#6d7178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="pl-2 text-base nav-content">Portfolio</p>     
        </li>
        <li className="pl-10 py-3 flex cursor-pointer nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#6d7178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="pl-2 text-base nav-content">Contact</p>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
