import React, { useState, useEffect } from 'react';
import './WudasieMariam.css';

const WudasieMariam = () => {
  const [hymns, setHymns] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/wudasie.json');
        if (!response.ok) {
          throw new Error('Failed to load hymns data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        // Adjust based on your JSON structure:
        // If data is an array: setHymns(data)
        // If data has a property 'hymns' which is an array: setHymns(data.hymns)
        if (Array.isArray(data)) {
          setHymns(data);
        } else if (data.hymns && Array.isArray(data.hymns)) {
          setHymns(data.hymns);
        } else {
          throw new Error('Unexpected data structure');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(hymns.length - 1, prev + 1));
  };

  const handleTitleClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <div className="wudasie loading">Loading hymns...</div>;
  }

  if (error) {
    return <div className="wudasie error">Error: {error}</div>;
  }

  if (hymns.length === 0) {
    return <div className="wudasie">No hymns available</div>;
  }

  const currentHymn = hymns[currentIndex];

  return (
    <div className='wudasie'>
      {/* Title Navigation Bar */}
      <div className="title-navbar">
        {hymns.map((hymn, index) => (
          <button
            key={hymn.id || index}
            className={`title-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleTitleClick(index)}
          >
            {hymn.title}
          </button>
        ))}
      </div>

      {/* Current Hymn Display */}
      <div className="hymn-display">
        <h2 className="hymn-title">{currentHymn.title}</h2>
        <div className="hymn-content">
          {Array.isArray(currentHymn.content) ? (
            currentHymn.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>{currentHymn.content}</p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </button>

        <span className="page-indicator">
          {currentIndex + 1} / {hymns.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === hymns.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WudasieMariam;