import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../Projects.css';

function Contact() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section  id="contact">
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1> Contact me</h1>
        </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <IconButton
          onClick={() => handleRedirect('https://github.com/Javilejoo')}
          aria-label="GitHub"
          style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}
        >
          <FaGithub style={{ marginRight: '5px' }} />
          <Typography>GITHUB</Typography>
        </IconButton>
        <IconButton
          onClick={() => handleRedirect('https://www.linkedin.com/in/javier-alejandro-prado-6a009b245/')}
          aria-label="LinkedIn"
          style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}
        >
          <FaLinkedin style={{ marginRight: '5px' }} />
          <Typography>LINKEDIN</Typography>
        </IconButton>
      </div>
    </section>
  );
}

export default Contact;
