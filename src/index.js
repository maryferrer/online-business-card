import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Skills from './Skills';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <section className="container">
    <Info />
      <article className="container2">
        <About />
        <Interests />
        <Skills />
      </article>
      <Footer />
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

