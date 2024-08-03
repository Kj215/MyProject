import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Header from './header'; // Import the Header component
import Items from './ItemsContainer'; // Import the Items component
import Footer from './InvoiceFooter'; // Import the Footer component
import TaxDetails from './TaxDetails';
import './Bill.css'; // Import the CSS file for styling
import { CustomerProvider } from './CustomerContext';
const customerDetails = {
  name: 'John Doe',
  address: '123 Main St',
  city: 'Anytown',
  state: 'Anystate',
  zip: '12345',
};

const items = [
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },
  { name: 'MangalSutra ', HallMark: '18K', Rate: 5880.00, pcs: 1, weight: 1.5 },

];
const customer = [{name:'Deep Raj Khatri',Add:'Bankey Bazar',Mob:8789057041}];

const CASH = 'CASH';

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const Bill = React.forwardRef((props, ref) => {
  const { items } = props;
  const chunkedItems = chunkArray(items, 8);

  return (
    <div ref={ref}>
      {chunkedItems.map((chunk, index) => (
        <div key={index} className="bill-container">
          <header>
            <Header customer ={customer} />
          </header>
          <main className="bill-main">
            <Items items={chunk} />
            <TaxDetails items={chunk} PaymentType={CASH} taxRate={3} />
          </main>
          <footer>
            <Footer />
          </footer>
          {index < chunkedItems.length - 1 && <div className="page-break"></div>}
        </div>
      ))}
    </div>
  );
});

const BillComponent = () => {
  const componentRef = useRef();

  return (
    <div>
      <Bill ref={componentRef} items={items} />
      <ReactToPrint
        trigger={() => <button className="print-button">Print this bill</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default BillComponent;
