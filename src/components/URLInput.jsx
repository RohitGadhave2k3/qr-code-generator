
// // src/components/URLInput.js
// import React from 'react';
// import { Button, FormControl, InputGroup } from 'react-bootstrap';

// const URLInput = ({ url, setUrl, handleGenerate }) => {
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleGenerate();
//     }
//   };

//   return (
//     <InputGroup className="mb-3">
//       <FormControl
//         type="url"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         onKeyPress={handleKeyPress}
//         placeholder="Enter a valid URL"
//       />
//       <Button variant="dark" onClick={handleGenerate}>
//         <i className="bi bi-qrcode"></i> Generate
//       </Button>
//     </InputGroup>
//   );
// };

// export default URLInput;
// src/components/URLInput.js
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const URLInput = ({ url, setUrl, handleGenerate }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a valid URL"
      />
      <Button variant="dark" onClick={handleGenerate}>
        <i className="bi bi-qrcode"></i> Generate
      </Button>
    </InputGroup>
  );
};

export default URLInput;

