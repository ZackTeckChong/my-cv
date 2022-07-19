import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div >
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <Document  file='/a.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={1500} pageNumber={pageNumber} />
      </Document>
      </div>
      <p  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Pdf



