import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import './Bible.css';

const Bible = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [activeTab, setActiveTab] = useState('read');
  const [pdfLib, setPdfLib] = useState(null);

  // Path to your Bible PDF
  const pdfUrl = "/data/bible.pdf";
  const docxUrl = "/data/bible.docx";

  useEffect(() => {
    // Dynamically import pdfjs-dist to avoid CDN issues
    const loadPdfJs = async () => {
      try {
        const pdfjs = await import('pdfjs-dist/build/pdf');
        const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
        
        // Set the worker directly
        pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        
        setPdfLib(pdfjs);
      } catch (error) {
        console.error("Failed to load PDF.js:", error);
      }
    };

    loadPdfJs();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () =>
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));

  const goToNextPage = () =>
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));

  const zoomIn = () => setScale(prevScale => Math.min(prevScale + 0.2, 3));
  const zoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5));

  // Fallback to iframe if PDF.js fails to load
  if (!pdfLib) {
    return (
      <div className='bible'>
        <div className="bible-header">
          <h1>መጽሐፍ ቅዱስ - Holy Bible</h1>
          <p>የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን አማርኛ ትርጉም</p>
        </div>
        
        <div className="pdf-fallback">
          <iframe
            src={`https://docs.google.com/gview?url=${window.location.origin}${pdfUrl}&embedded=true`}
            width="100%"
            height="600px"
            frameBorder="0"
            title="Holy Bible PDF"
          ></iframe>
          <p className="fallback-note">
            Using Google Docs viewer as PDF.js failed to load. For better experience, 
            <a href={pdfUrl} download> download the PDF</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bible'>
      <div className="bible-header">
        <h1>መጽሐፍ ቅዱስ - Holy Bible</h1>
        <p>የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን አማርኛ ትርጉም</p>
      </div>

      <div className="bible-tabs">
        <button 
          className={activeTab === 'read' ? 'active' : ''}
          onClick={() => setActiveTab('read')}
        >
          አንብብ / Read
        </button>
        <button 
          className={activeTab === 'download' ? 'active' : ''}
          onClick={() => setActiveTab('download')}
        >
          አውርድ / Download
        </button>
      </div>

      {activeTab === 'read' && (
        <div className="bible-content">
          <div className="pdf-controls">
            <div className="navigation-controls">
              <button 
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="nav-button"
              >
                ‹ ቀዳሚ
              </button>
              <span className="page-info">
                ገፅ {pageNumber} ከ {numPages || '--'}
              </span>
              <button 
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="nav-button"
              >
                ቀጣይ ›
              </button>
            </div>
            
            <div className="zoom-controls">
              <button onClick={zoomOut} className="zoom-button">
                🔍-
              </button>
              <span className="zoom-level">{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} className="zoom-button">
                🔍+
              </button>
            </div>
            
            <div className="jump-controls">
              <input
                type="number"
                min="1"
                max={numPages || 1}
                value={pageNumber}
                onChange={(e) => {
                  const newPage = Math.max(1, Math.min(numPages || 1, parseInt(e.target.value) || 1));
                  setPageNumber(newPage);
                }}
                className="page-input"
              />
              <button 
                onClick={() => {
                  const input = document.querySelector('.page-input');
                  const newPage = Math.max(1, Math.min(numPages || 1, parseInt(input.value) || 1));
                  setPageNumber(newPage);
                }}
                className="jump-button"
              >
                ዝለል
              </button>
            </div>
          </div>

          <div className="pdf-viewer">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="loading">
                  <div className="spinner"></div>
                  <p>መጽሐፍ ቅዱስ በመጫን ላይ...</p>
                </div>
              }
              error={<div className="error">❌ ፒዲኤፍ መጫን አልተቻለም</div>}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                loading={<div className="loading">ገፅ በመጫን ላይ...</div>}
              />
            </Document>
          </div>
        </div>
      )}

      {activeTab === 'download' && (
        <div className="download-section">
          <h2>Download the Holy Bible</h2>
          <div className="download-options">
            <div className="download-option">
              <h3>PDF Version</h3>
              <p>Best for reading on all devices</p>
              <a href={pdfUrl} download className="download-btn">
                Download PDF
              </a>
            </div>
            <div className="download-option">
              <h3>Word Document</h3>
              <p>Editable version (Microsoft Word)</p>
              <a href={docxUrl} download className="download-btn">
                Download DOCX
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bible;