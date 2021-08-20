import React from 'react';
import Nav from './Nav';
import avatar from '../assets/images/sample/avatar.jpeg';;

const SideBar = () => {

  return (
    <div className="h-screen flex-col sidebar-wrapper">
      <div className="infor">
        <img className="avatar" src={avatar} alt="Hieu Vo Van" />
        <p className="uppercase w-full text-center px-2 py-2 text-white font-bold name">Hieu Vo Van</p>
      </div>
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="self-end sidebar-bottom">
        <div className="pb-8 px-6 copyright">
          <p className="text-center text-sm content">
            2021 © Cosmos-Themes.
            All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
