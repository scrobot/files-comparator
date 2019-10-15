import React from 'react';
import '../css/App.css';
import Header from "./Header";
import {Sidebar} from "./Sidebar";
import { BrowserRouter } from 'react-router-dom'
import Body from "./Body";

const App: React.FC = () => {
  return (
      <BrowserRouter>
            <div className="App container-fluid">
                <Header />
                <div className="row">
                    <Sidebar />
                    <Body />
                </div>
            </div>
      </BrowserRouter>
  );
};

export default App;
