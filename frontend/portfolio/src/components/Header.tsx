import React, { useEffect, useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';
import './Header.css';
import Sidebar from './Sidebar';

interface HeaderProps {
  tabs: { label: string; contentId: string }[];
  headerTab: { label: string; contentId: string };
}

const Header: React.FC<HeaderProps> = ({ tabs, headerTab }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHeaderTabClick = (contentId: string) => {
    document.getElementById(contentId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-tab">
        <Tab
          label={headerTab.label}
          onClick={() => handleHeaderTabClick(headerTab.contentId)}
          isActive={false}
        />
      </div>
      <Tabs tabs={tabs} />
      <Sidebar />
    </div>
  );
};

export default Header;
