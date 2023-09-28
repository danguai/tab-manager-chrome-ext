import React, { useState, useEffect } from 'react';

import './styles.css';

const Icon = () => (<svg height="20" width="20" viewBox="0 0 20 20">^</svg>);

const DropdownCategories = ({ placeholder, options }) => {
  const [mark, setMark] = useState(false);
  const [read, setRead] = useState('UNREAD');
  const [active, setActive] = useState('INACTIVE');
  const [showMenu, setShowMenu] = useState(false);
  const [selectCat, setSelectCat] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  const selectCategory = () => {
    return (
      <div className="dropdown--menu">

        {options.map(option => (
          <div
            key={option.name}
            className="dropdown--item categories"
            style={{
              background: `${option.color}`,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            {option.name}
          </div>
        ))}
      </div>
    )
  };

  const checkbox = () => setMark(!mark);
  const alreadyRead = () => setRead('READ');

  const activateColors = () => setActive('ACTIVE');

  // const handleInputClick = (e) => {
  //   e.stopPropagation();
  //   setShowMenu(!showMenu);
  // };

  const getDisplay = () => {
    if (selectCat) return selectCat.name;
    return placeholder;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <button type="button">{mark ? 'INACTIVE' : 'ACTIVE'}</button>
      </div>
      <div className="line--divider" />
      <div>
        {/* <form onSubmit={handleSubmit}> */}
        <div>
          <div>
            <input type="checkbox" onChange={checkbox} />
            <div>PORQUE NO VEO EL CHECKBOX</div>
          </div>
        </div>

        <div className="line--divider" />
        <h5 className="titles">CATEGORIES</h5>
        <div className="line--divider" />
        <div className="dropdown--container">
          <div className="dropdown--input">
            <div className="dropdown--selected--value">{getDisplay()}</div>
            {/* {selectCategory()} */}
            <div className="dropdown--tools">
              <div className="dropdown--tool"><Icon /></div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </>
  );
};


export default DropdownCategories;
