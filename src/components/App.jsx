import React from 'react';
import './styles.css';

import Dropdown from './Dropdown';

const App = () => {
  const options = [
    { name: 'ENTERTAINMENT', color: '#2E4A63' },
    { name: 'WORK', color: '#DC0022' },
    { name: 'NEWS', color: '#227C00' },
  ];

  return (
    <div className="maxSize">
      <div className="title">TAB MANAGER</div>
      <Dropdown placeholder="Select..." options={options} />
    </div>
  )
};

export default App;
