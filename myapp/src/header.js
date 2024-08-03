import React from 'react';
import './header.css';
import logo from './Hallmark.svg'
import BorrowerDetails from './BorrowerDetails';
import Footer from './InvoiceFooter';
import ItemsContainer from './ItemsContainer'; // Import the ItemsContainer component
const customer = {name:'Deep Raj Khatri',Add:'Bankey Bazar',Mob:8789057041};
const Header = () => {
    return (
      <div>
        <header className="header">
        <img src={logo} alt="Logo Left" className="header-logo" />
            <h1 className="header-title">
                K<span className="logo-small"></span>OMAL JEWELLERS <span className="logo-small"></span>
            </h1>
            <p className="header-subtitle">In Front Of Juri more, Bankey Bazar</p>
            <p className="header-contact">Mob: 7050310922 | GST: 10BTHPK0067J1ZZ</p>
            <BorrowerDetails customer ={customer} />
        </header>
        
        </div>
    );
};

export default Header;
