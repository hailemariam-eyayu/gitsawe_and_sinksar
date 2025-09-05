import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Bible.css";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Bible = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [activeTab, setActiveTab] = useState("read");
  const [loadError, setLoadError] = useState(false);

  // Public files - ensure these paths are correct
  const pdfUrl = "/data/bible.pdf";
  const docxUrl = "/data/bible.docx";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoadError(false);
  }

  function onDocumentLoadError(err) {
    console.error("PDF load error:", err);
    setLoadError(true);
  }

  const goToPrevPage = () =>
    setPageNumber((prev) => Math.max(prev - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  const handlePageJump = () => {
    const input = document.querySelector(".page-input");
    if (input) {
      const newPage = Math.max(
        1,
        Math.min(numPages || 1, parseInt(input.value) || 1)
      );
      setPageNumber(newPage);
    }
  };

  return (
    <div className="bible">
      <div className="bible-header">
        <h1>መጽሐፍ ቅዱስ - Holy Bible</h1>
        <p>የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን አማርኛ ትርጉም</p>
      </div>

      {/* Tabs */}
      <div className="bible-tabs">
        <button
          className={activeTab === "read" ? "active" : ""}
          onClick={() => setActiveTab("read")}
        >
          አንብብ / Read
        </button>
        <button
          className={activeTab === "download" ? "active" : ""}
          onClick={() => setActiveTab("download")}
        >
          አውርድ / Download
        </button>
      </div>

      {/* Reading Tab */}
      {activeTab === "read" && (
        <div className="bible-content">
          {/* Controls */}
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
                ገፅ {pageNumber} {numPages ? `ከ ${numPages}` : ""}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= (numPages || 1)}
                className="nav-button"
              >
                ቀጣይ ›
              </button>
            </div>

            <div className="zoom-controls">
              <button onClick={zoomOut} className="zoom-button">
                🔍-
              </button>
              <span className="zoom-level">
                {Math.round(scale * 100)}%
              </span>
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
                  const newPage = Math.max(
                    1,
                    Math.min(numPages || 1, parseInt(e.target.value) || 1)
                  );
                  setPageNumber(newPage);
                }}
                className="page-input"
                placeholder="Page #"
              />
              <button
                onClick={handlePageJump}
                className="jump-button"
              >
                ዝለል
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="pdf-viewer">
            {loadError ? (
              <div className="pdf-fallback">
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  title="Holy Bible PDF"
                />
                <p className="fallback-note">
                  ❌ PDF preview failed. Using browser viewer instead.
                </p>
              </div>
            ) : (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="loading">
                    <div className="spinner"></div>
                    <p>መጽሐፍ ቅዱስ በመጫን ላይ...</p>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  loading={<div className="loading">ገፅ በመጫን ላይ...</div>}
                />
              </Document>
            )}
          </div>
        </div>
      )}

      {/* Download Tab */}
      {activeTab === "download" && (
        <div className="download-section">
          <h2>Download the Holy Bible</h2>
          <div className="download-options">
            <div className="download-option">
              <h3>PDF Version</h3>
              <p>Best for reading on all devices</p>
              <a href={pdfUrl} download="Holy_Bible.pdf" className="download-btn">
                Download PDF
              </a>
            </div>
            <div className="download-option">
              <h3>Word Document</h3>
              <p>Editable version (Microsoft Word)</p>
              <a href={docxUrl} download="Holy_Bible.docx" className="download-btn">
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