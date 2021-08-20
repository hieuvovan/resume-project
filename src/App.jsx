import React from 'react';
import Home from './pages/Home';
import SideBar from './layout/SideBar';

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="flex">
        <aside className="w-1/6 side-bar">
          <SideBar />
        </aside>
        <main className="w-5/6 page-main">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
