import React from 'react';
import './styles.css';

import DropdownCategories from './Categories';

const App = () => {
  const options = [
    { name: 'ENTERTAINMENT', color: '#2E4A63' },
    { name: 'WORK', color: '#DC0022' },
    { name: 'NEWS', color: '#227C00' },
  ];

  return (
    <div className="maxSize">
      <h3 className="titles">TAB MANAGER</h3>
      <DropdownCategories placeholder="Select..." options={options} />
    </div>
  )
};

export default App;
