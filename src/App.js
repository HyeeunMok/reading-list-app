import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
