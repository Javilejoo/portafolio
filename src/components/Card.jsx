import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FaHtml5, FaCss3, FaJs, FaReact,FaAngular } from 'react-icons/fa'; 
import { SiMongodb, SiMysql, SiVite, SiExpress } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { CardActionArea } from '@mui/material';

function CustomCard({ image, title, description, technologies, link}) {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', fontFamily: 'Patrick Hand, cursive' }}>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Patrick Hand, cursive' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Patrick Hand, cursive' }}>
          {description}
        </Typography>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
          {technologies.map((tech, index) => {
            // Asigna el icono correspondiente según la tecnología
            let IconComponent;
            switch (tech) {
              case 'HTML':
                IconComponent = FaHtml5;
                break;
              case 'CSS':
                IconComponent = FaCss3;
                break;
              case 'JavaScript':
                IconComponent = FaJs;
                break;
              case 'React':
                IconComponent = FaReact;
                break;
              case 'Vite':
                IconComponent = SiVite;
                break;
              case 'MongoDB':
                IconComponent = SiMongodb;
                break;
              case 'MySQL':
                IconComponent = SiMysql;
                break;
              case 'Node.js':
                IconComponent = DiNodejs;
                break;
              case 'Express':
                IconComponent = SiExpress;
                break;
              case 'Angular':
                IconComponent = FaAngular;
                break;
              default:
                IconComponent = null;
                break;
            }
            return IconComponent && <IconComponent key={index} size={20} style={{ marginRight: '5px' }} />;
          })}
        </div>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;