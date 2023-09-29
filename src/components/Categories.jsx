import React, { useState, useEffect } from 'react';

import './styles.css';

const Icon = () => (
  <svg height="20" width="20" viewBox="0 0 20 20">
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  </svg>
);

const DropdownCategories = ({ placeholder, options }) => {
  const [mark, setMark] = useState(false);

  const [activate, setActivate] = useState(false);
  const [activateButtonName, setActivateButtonName] = useState('INACTIVE');

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [selectCat, setSelectCat] = useState(null);

  useEffect(() => {
    const handler = () => setDropdownMenu(!dropdownMenu);

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  const isSelected = (option) => {
    if (!selectCat) return false;
    return selectCat.name === option.name;
  };

  const selectCategory = () => (
    <div className="dropdown--menu">
      {options.map(option => (
        <div
          onClick={(option => setSelectCat(option))}
          key={option.name}
          className={`dropdown--item categories`}
          style={{
            background: `${option.color}`,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          {option.name}
        </div>
      ))}
    </div>
  );

  const activateColors = () => {
    setActivate(!activate);
    setActivateButtonName('ACTIVE');
  };

  const checkbox = () => setMark(!mark);

  const showMenu = (e) => {
    e.stopPropagation();
    setDropdownMenu(!dropdownMenu);
  };

  const getDisplay = () => {
    if (selectCat) return selectCat.name;
    return placeholder;
  };

  return (
    <>
      <div>
        <button
          type="button"
        // onClick={activateColors()}
        >
          {activateButtonName}
        </button>
      </div>

      <div className="line--divider" />

      <div>
        WHERE'S THE FUCKING CHECKBOX
        <div>
          <input type="checkbox" onChange={checkbox} />
        </div>
      </div>

      <div className="line--divider" />

      <h5 className="titles">CATEGORIES</h5>
      <div className="line--divider" />

      <div className="dropdown--container">
        {dropdownMenu && (
          <div onClick={showMenu} className="dropdown--input">
            <div className="dropdown--selected--value">{getDisplay()}</div>
            {selectCategory()}
            <div className="dropdown--tools">
              <div className="dropdown--tool"><Icon /></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownCategories;
