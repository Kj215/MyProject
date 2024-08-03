import React from 'react';
import './InvoiceFooter.css'; // Import the CSS file

const InvoiceFooter = () => {
    return (
            <div className="invoice-footer">
                <div className="footer-signatures">
                    <div className="signature">
                        <div className="signature-line"></div>
                        <p>Customer Signature:</p>
                    </div>
                    <div className="signature">
                        <div className="signature-line"></div>
                        <p>Authorize Signature:</p>
                    </div>
                </div>
                <div className="footer-message">
                    <p>Thank you for your purchase!</p>
                </div>
            </div>
    );
};

export default InvoiceFooter;
