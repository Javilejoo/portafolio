import React from 'react';
import TechnologieCard from './TechnologieCard';

function Technologies() {
    const technologies = [
        {
            title: 'Frontend',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite']
        },
        {
            title: 'Backend',
            technologies: ['Node.js', 'Express']
        },
        {
            title: 'Bases de datos',
            technologies: ['PostgreSQL', 'MongoDB', 'Neo4J', 'MySQL']
        }
    ];
    return (
        <section id="technologies" style={{ padding: '40px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Patrick Hand, cursive' }}>Technologies</h1>
            <div className="cards-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {technologies.map((technology, index) => (
                    <TechnologieCard
                        key={index}
                        title={technology.title}
                        technologies={technology.technologies}
                    />
                ))}
            </div>
        </section>
    );
}

export default Technologies;
