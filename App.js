// src/App.js
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <p>Professional Title</p>
      </header>

      <section className="bio">
        <h2>About Me</h2>
        <p>
          Write a brief bio here. Describe your professional background, key
          achievements, and career goals.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>Phone: +123-456-7890</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">Your Profile</a></p>
      </section>

      <footer className="footer">&copy; 2025 Your Name</footer>
    </div>
  );
}

export default App;