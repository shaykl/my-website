import React from 'react';
import { ProjectDTO } from './projects';
import defaultImage from '../assets/default-image.jpg';

const Project: React.FC<ProjectDTO> = (project) => {
    const { name, description, image } = project;

    return (
        <div className='project'>
            <img src={defaultImage} alt={name} />
            <div className='text'>
                <h4>{name}</h4>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default Project