import React from "react";
import "./BorrowerDetails.css";
import { useCustomer } from './CustomerContext';
import moment from 'moment';

const invoice = 95;
const BorrowerDetails = ({customer}) => {
    const now = moment(); // Get the current date and time
    const formattedDate = now.format('DD MMMM YYYY'); // Format
    const customerDetails = useCustomer();
  return (
    <div className="borrower-details">
      <div className="parallel-container">
        <h2 className="parallel-item">Sold to:</h2>
        <h2 className="parallel-item">Invoice: {invoice}</h2>
      </div>

      <div className="borrower-info-container">
        <div className="borrower-info">
          <div className="borrower-label">Name: </div>
          <div className="borrower-value">{customerDetails.name}</div>
        </div>
        <div className="borrower-info">
          <div className="borrower-label">Phone: </div>
          <div className="borrower-value">{customerDetails.phone}</div>
        </div>
      </div>
      <div className="borrower-info-container">
        <div className="borrower-info">
          <div className="borrower-label">Address:</div>
          <div className="borrower-value">
           {customerDetails.address}
          </div>
        </div>
        <div className="borrower-info">
          <div className="borrower-label">Date:</div>
          <div className="borrower-value">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDetails;
