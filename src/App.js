import React from 'react';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My E-Commerce Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        &copy; 2023 My E-Commerce Website
      </footer>
    </div>
  );
}

export default App;
