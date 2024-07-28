// src/App.js
import React, { useState } from 'react';
import URLInput from './components/URLInput';
import QRCodeGenerator from './components/QRCodeGenerator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import QRCode from 'qrcode';

const App = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [alert, setAlert] = useState('');

  const handleGenerate = () => {
    if (!url) {
      setAlert('Enter The Url');
      setTimeout(() => setAlert(''), 5000);
      return;
    }

    QRCode.toDataURL(url, (err, dataUrl) => {
      if (err) {
        setAlert('Invalid URL');
        setTimeout(() => setAlert(''), 5000);
        return;
      }
      setQrCode(dataUrl);
    });
  };

  const clearUrl = () => {
    setUrl('');
    setQrCode('');
  };

  return (
    <div className="App d-flex justify-content-center align-items-center min-vh-100">
      <div className="qr-generator p-4 shadow rounded">
        <h2 className="text-center text-white bg-danger p-2 rounded">
          YOUR QR Generator
        </h2>
        <URLInput url={url} setUrl={setUrl} handleGenerate={handleGenerate} />
        <QRCodeGenerator qrCode={qrCode} clearUrl={clearUrl} alert={alert} />
      </div>
    </div>
  );
};

export default App;
