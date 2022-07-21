import React from 'react';
import Sidebar from './Sidebar.jsx';
import Home from './Home';
import { AppProvider } from './context';

function App() {
  return (
    <>
    <AppProvider>
        <Home/>
        <Sidebar/>
    </AppProvider>
    </>
  );
}

export default App;
