import React from 'react';
import '../css/App.css';
import Header from "./Header";
import {Sidebar} from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

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
