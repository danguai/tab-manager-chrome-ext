import React, { useState, useEffect } from 'react';

import './styles.css';

const Categories = ({ options }) => {
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    // const [selectCat, setSelectCat] = useState(null);

    // const isSelected = () => {
    //     if (!selectCat) return 'CATEGORY';
    //     return 'TEST';
    // };

    const selectCategory = () => (
        <div className="dropdown--menu">
            {options.map(option => (
                <div
                    onClick={option => { setCategoryDropdown(option.name) }}
                    role="button"
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

    const selectedCategory = ({ option }) => {
        if (!selectCat) return 'CATEGORY';
        return option.name;
    };

    const showMenu = (e) => {
        e.stopPropagation();
        setCategoryDropdown(!categoryDropdown);
    };

    return (
        <>
            <div onClick={showMenu} className="category--title">CATEGORIES</div>
            <div className="dropdown--input">
                {categoryDropdown && selectCategory()}
            </div>
        </>
    );
};

export default Categories;
