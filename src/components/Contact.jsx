import React from 'react';
import { Button,IconButton, Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../Projects.css';

function Contact() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Correo electrónico copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  };

  const email = "javilejo02@gmail.com"; 

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
        <Button
          variant="contained"
          style={{ backgroundColor: '#6c757d', color: '#fff' }} // Botón gris
          startIcon={<ContentCopyIcon />}
          onClick={() => copyToClipboard(email)}
        >
          Copy Email
        </Button>
      </div>
    </section>
  );
}

export default Contact;
