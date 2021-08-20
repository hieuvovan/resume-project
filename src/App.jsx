import React from 'react';
import Home from './pages/Home';
import SideBar from './layout/SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="page-wrapper">
        <div className="flex">
          <aside className="w-1/6 side-bar">
            <SideBar />
          </aside>
          <main className="w-5/6 page-main">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
