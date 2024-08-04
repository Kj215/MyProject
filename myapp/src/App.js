import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Bill from './Bill';
import ReactToPrint from 'react-to-print';
import './index.css';
import { CustomerProvider } from './CustomerContext';
import CustomerForm from './CustomerInfoForm';
import ItemForm from './ItemForm';

// Sample customer details
const customerDetails = {
  name: 'Deep Raj Khatri',
  address: 'Bankey Bazar',
  phone :'8789057041',
};


const App = () => {

  const componentRef = useRef();
  
  return (
    <CustomerProvider customerDetails={customerDetails}>
    <div>
    <ItemForm />
    </div>
    </CustomerProvider>
  );
};

export default App;
