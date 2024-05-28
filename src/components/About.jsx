import React, { useEffect, useState } from 'react';
import '../About.css';

function About() {
  const [displayedText, setDisplayedText] = useState(['', '', '', '']);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const texts = [
      "Hey there! 👋",
      "I'm Javier, a 4th-year Computer Science & IT Engineering student at the Universidad del Valle de Guatemala. 🏫",
      "My love for technology started with a simple'Hello World'. Ever since, I've been hooked! 💻",
      "I'm passionate about code, fueled by a love for problem-solving and a desire to learn new things. Building the future, one line of code at a time 🚀"
    ];

    let currentText = '';
    let isDeleting = false;
    let i = 0; // Track current text
    let j = 0; // Track position in current text
    let timer;

    const type = () => {
      const speed = isDeleting ? 1 : 30;
      if (!isDeleting && j < texts[i].length) {
        currentText = texts[i].substring(0, j + 1);
        j++;
      } else if (isDeleting && j > 0) {
        currentText = texts[i].substring(0, j - 1);
        j--;
      }

      setDisplayedText(prev => {
        let updatedText = [...prev];
        updatedText[i] = currentText;
        return updatedText;
      });

      if (!isDeleting && j === texts[i].length) {
        isDeleting = true;
        timer = setTimeout(() => {
          isDeleting = false;
          i++;
          if (i === texts.length) {
            setIsComplete(true);
            return;
          }
          j = 0;
          timer = setTimeout(type, 75);
        }, 100);
      } else {
        timer = setTimeout(type, speed);
      }
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="About">
      <div id="main">
        <div className="hello">
          <span className="letter">H</span>
          <span className="letter">E</span>
          <span className="letter">L</span>
          <span className="letter">L</span>
          <span className="letter">O</span>
        </div>
        <div className="world">WORLD!</div>
      </div>
      <div className="about-me">
        <h1 className="animated-heading">
          <span className="typing">{displayedText[0]}</span>
          {!isComplete && <span className="typing-cursor"></span>}
        </h1>
        <p className="animated-text">
          <span className="typing">{displayedText[1]}</span>
          {!isComplete && <span className="typing-cursor"></span>}
        </p>
        <p className="animated-text">
          <span className="typing">{displayedText[2]}</span>
          {!isComplete && <span className="typing-cursor"></span>}
        </p>
        <p className="animated-text">
          <span className="typing">{displayedText[3]}</span>
          {!isComplete && <span className="typing-cursor"></span>}
        </p>
      </div>
    </section>
  );
}

export default About;