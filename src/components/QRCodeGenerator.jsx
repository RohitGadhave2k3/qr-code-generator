
import React from 'react';
import { Button, Alert } from 'react-bootstrap';

const QRCodeGenerator = ({ qrCode, clearUrl, alert }) => {
  return (
    <div className="text-center">
      {alert && <Alert variant="danger">{alert}</Alert>}
      {qrCode && <img src={qrCode} alt="qr-code" className="my-3" />}
      <div className="d-flex justify-content-center">
        <Button variant="secondary" onClick={clearUrl} className="me-2">
          Clear
        </Button>
        {qrCode && (
          <Button variant="success">
            <a
              download="qrCode.png"
              href={qrCode}
              className="text-white text-decoration-none"
            >
              Download
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

