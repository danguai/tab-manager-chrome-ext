import React, { useState, useEffect } from 'react';

import './styles.css';

const Icon = () => (
  <svg height="20" width="20" viewBox="0 0 20 20">
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  </svg>
);

const Dropdown = ({ placeholder, options }) => {
  const [unread, setUnread] = useState(false);

  const [activate, setActivate] = useState(false);

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [selectCat, setSelectCat] = useState(null);

  // useEffect(() => {
  //   const handler = () => setDropdownMenu(!dropdownMenu);

  //   window.addEventListener('click', handler);
  //   return () => {
  //     window.removeEventListener('click', handler);
  //   };
  // });

  const checkmark = () => setUnread(!unread);

  const activateColors = () => setActivate(!activate);

  const activateButtonName = () => {
    if (activate) return 'ACTIVE';
    return 'INACTIVE';
  };
  const isSelected = (option) => {
    if (!selectCat) return false;
    return selectCat.name === option.name;
  };

  const selectCategory = () => (
    <>
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
    </>
  );

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
      <div className="line--divider" />
      <div className="button--container">
        <button
          type="button"
          className={activate ? 'button--active' : 'button--inactive'}
          onClick={activateColors}
        >
          {activateButtonName()}
        </button>
      </div>
      <div className="line--divider" />
      <div className="unread">
        <div className="read-unread">READ OR UNREAD</div>
        {/* <input type="checkbox" checked={unread} onChange={checkmark} />
        {unread ? 'UNREAD' : ''} */}
      </div>
      <div className="line--divider" />
      <div className="read-unread">NOTES</div>
      <div className="line--divider" />
      <div className="dropdown--container">
        <div onClick={showMenu} className="category--title">CATEGORIES</div>
        <div>
          {dropdownMenu && (
            <div className="dropdown--input">
              <div className="dropdown--selected--value">{getDisplay()}</div>
              {selectCategory()}
              <div className="dropdown--tools">
                <div className="dropdown--tool"><Icon /></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
