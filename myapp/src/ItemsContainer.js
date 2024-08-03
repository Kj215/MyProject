import React from 'react';
import './ItemsContainer.css'; // Import the CSS file

const ItemsContainer = ({ items }) => {
    return (
        <div className="items-container">
            <div className="items-header">
                <div className="item-field siNo">Si.no</div>
                <div className="item-field">Item</div>
                <div className="item-field">Weight</div>
                <div className="item-field">Pcs</div>
                <div className="item-field">Rate</div>
                <div className="item-field">Total</div>
            </div>
            {items.map((item, index) => (
                <div className="items-row" key={index}>
                    <div className="item-field siNo">{index +1}.</div>
                    <div className="item-field">{item.name} <span className="bold-letter">{item.HallMark && `(${item.HallMark})`} </span></div>
                    <div className="item-field">{item.weight}g</div>
                    <div className="item-field">{item.pcs}</div>
                    <div className="item-field price">{item.Rate.toFixed(2)}<span className="bold-letter">/g</span></div>
                    <div className="item-field total">{(item.Rate * item.pcs * item.weight).toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
};

export default ItemsContainer;
