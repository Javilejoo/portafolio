import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiVite, SiExpress, SiNeo4J } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { BiLogoPostgresql } from "react-icons/bi";
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

function TechnologieCard({ title, technologies }) {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px', fontFamily: 'Patrick Hand, cursive', flex: '1 1 300px' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Patrick Hand, cursive' }}>
                        {title}
                    </Typography>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {technologies.map((tech, index) => {
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
                                case 'Node.js':
                                    IconComponent = DiNodejs;
                                    break;
                                case 'Express':
                                    IconComponent = SiExpress;
                                    break;
                                case 'MongoDB':
                                    IconComponent = SiMongodb;
                                    break;
                                case 'MySQL':
                                    IconComponent = SiMysql;
                                    break;
                                case 'PostgreSQL':
                                    IconComponent = BiLogoPostgresql;
                                    break;
                                case 'Neo4J':
                                    IconComponent = SiNeo4J;
                                    break;
                                default:
                                    IconComponent = null;
                                    break;
                            }
                            return IconComponent && <IconComponent key={index} size={40} style={{ margin: '10px' }} />;
                        })}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default TechnologieCard;
