import React, { useState } from 'react';

function Tab({ label, content, onClick }) {
  return (
    <div className="tab" onClick={onClick}>
      {label}
    </div>
  );
}

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {items.map((item, index) => (
          <Tab
            key={index}
            label={item.label}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;

