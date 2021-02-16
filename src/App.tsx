import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Router from './Router';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
