import React from 'react';
import { ReactQueryConfigProvider } from 'react-query'
import './App.css';
import TilesSection from './components/TilesSection';
import ToDoSection from './components/ToDoSection';
import HooksSection from './components/HooksSection';
import Modal from './components/Modal';
import SuspenseSection from './components/SuspenseSection';

function App() {
  return (
    <>
      <ReactQueryConfigProvider config={{ suspense: true }}>
        <TilesSection />
        <ToDoSection />
        <HooksSection />
        <Modal />
        <SuspenseSection />
      </ReactQueryConfigProvider>
    </>
  );
}

export default App;
