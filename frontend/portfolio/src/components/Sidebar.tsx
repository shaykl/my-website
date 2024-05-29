import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="mailto:shay.it.kl@gmail.com">
        <FaEnvelope className="icon" />
      </a>
    </div>
  );
};

export default Sidebar;
