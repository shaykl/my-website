import React, { useState } from 'react';
import Tab from './Tab';
import './Tabs.css';

interface TabsProps {
  tabs: { label: string; contentId: string }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, contentId: string) => {
    setActiveTab(index);
    document.getElementById(contentId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index, tab.contentId)}
            isActive={index === activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
