<<<<<<< HEAD
// // src/components/QRCodeGenerator.js
// import React, { useState } from 'react';
// import QRCode from 'qrcode';
// import { Button, Alert } from 'react-bootstrap';

// const QRCodeGenerator = ({ url, clearUrl }) => {
//   const [qrCode, setQrCode] = useState('');
//   const [alert, setAlert] = useState('');

//   const handleGenerate = async () => {
//     if (!url) {
//       setAlert('Enter The Url');
//       setTimeout(() => setAlert(''), 5000);
//       return;
//     }
//     try {
//       const qrCodeDataUrl = await QRCode.toDataURL(url);
//       setQrCode(qrCodeDataUrl);
//     } catch (error) {
//       setQrCode('');
//       setAlert('Invalid URL');
//       setTimeout(() => setAlert(''), 5000);
//     }
//   };

//   const handleClear = () => {
//     setQrCode('');
//     clearUrl();
//   };

//   return (
//     <div className="text-center">
//       {alert && <Alert variant="danger">{alert}</Alert>}
//       {qrCode && <img src={qrCode} alt="qr-code" className="my-3" />}
//       <div className="d-flex justify-content-center">
//         <Button variant="secondary" onClick={handleClear} className="me-2">
//           Clear
//         </Button>
//         {qrCode && (
//           <Button variant="success">
//             <a
//               download="qrCode.png"
//               href={qrCode}
//               className="text-white text-decoration-none"
//             >
//               Download
//             </a>
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QRCodeGenerator;
// src/components/QRCodeGenerator.js
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

export default QRCodeGenerator;
=======

>>>>>>> 43130c2ee655f56639d8fdfd056fa5bf945dab02
