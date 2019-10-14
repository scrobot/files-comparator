import React from 'react';
import './App.css';
import Header from "./header/Header";
import {Sidebar} from "./sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
