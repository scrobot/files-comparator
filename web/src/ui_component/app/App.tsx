import React from 'react';
import './App.css';
import Header from "../header/Header";
import Body from "../body/Body";
import {Sidebar} from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const App: React.FC = () => {
  return (
            <div className="App container-fluid">
                <Header />
                <div className="row">
                    <Sidebar />
                    <Body />
                    <Footer />
                </div>
            </div>
  );
};

export default App;
