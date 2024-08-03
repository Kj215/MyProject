import React from "react";
import "./TaxDetails.css";
import { toWords } from "number-to-words"; // Import the library

const TaxDetails = ({ items, taxRate, PaymentType }) => {
  // Calculate the subtotal
  const subtotal = items.reduce(
    (acc, item) => acc + item.Rate * item.pcs * item.weight,
    0
  );

  // Calculate the tax amount
  const taxAmount = subtotal * (taxRate / 100);

  // Calculate the final amount
  const finalAmount = subtotal + taxAmount;
  const discount = finalAmount - Math.floor(finalAmount);

  // Calculate gross amount after discount
  const grossAmount = finalAmount - discount;

  // Convert gross amount to words
  const amountInWords = toWords(grossAmount);

  return (
    <div className="tax-details-container">
      <div className="tax-detail">
        <div className="tax-label">Subtotal:</div>
        <div className="tax-value">{subtotal.toFixed(2)}</div>
      </div>
      <div className="tax-detail">
        <div className="tax-label">Tax ({taxRate}%):</div>
        <div className="tax-value">{taxAmount.toFixed(2)}</div>
      </div>
      <div className="tax-detail tax-total">
        <div className="tax-label">Gross Total Amount:</div>
        <div className="tax-value">{finalAmount.toFixed(2)}</div>
      </div>
      {discount > 0 && (
        <div className="tax-detail">
          <div className="tax-label">Discount:</div>
          <div className="tax-value">-{discount.toFixed(2)}</div>
        </div>
      )}
      <div className="tax-detail tax-total">
        <div className="tax-label">Total Amount:</div>
        <div className="tax-value">{finalAmount.toFixed(2) - discount.toFixed(2)}</div>
      </div>
      <div className="amount-received">
        <div className="amount-received-label">
          <div>Amount Received Against</div>
          <div className="amount-received-value">
          {PaymentType && `(${PaymentType})`}{grossAmount.toFixed(2)}
          </div>
        </div>
        <div className="amount-received-credit">
          <div>Credit/Debit</div>
        </div>
      </div>
      <div className="amount-in-words">
        <div>
          Total Amount in Words:{" "}
          {amountInWords.charAt(0).toUpperCase() + amountInWords.slice(1)}  Rupees Only
        </div>
      </div>
    </div>
  );
};

export default TaxDetails;
