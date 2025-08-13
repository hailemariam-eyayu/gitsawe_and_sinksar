import React, { useState, useEffect } from 'react';

// Mock data to simulate fetching from a JSON file.
// The content for each hymn can be a single string or an array of paragraphs.
const mockWudasieData = [
  {
    id: 1,
    title: "Monday",
    content: [
      "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with David, who said, 'I have sung hymns to thee; I have been exalted.' And he said, 'The daughter of the king, who is the Mother of the King of kings, hath taken pleasure in my hymns.' The King of the ages, the one to whom the Seraphim bow down, dwelleth in her womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy.",
      "Behold, O my Lady, thou hast turned my sorrow into joy; and thou hast delivered me from the hands of the enemy; and thou hast set my feet upon a rock, and hast strengthened my steps; and thou hast taught me thy commandments, and hast shown me thy righteousness. For thou art the Mother of the King of kings, the one to whom the Cherubim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
    ]
  },
  {
    id: 2,
    title: "Tuesday",
    content: [
      "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Isaiah, who said, 'Behold, a Virgin shall conceive, and bear a son, and shall call His name Immanuel.' And he said, 'Thou hast brought us salvation, O my Lady; thou hast given birth to a son, who hath redeemed us from our sins, and hath delivered us from the hands of the enemy.'",
      "Behold, O my Lady, thou art the root of Jesse, and the flower of David, and the rod of Aaron. Thou art the ark of the covenant, and the vessel of honour, and the throne of glory. For thou art the Mother of the King of kings, the one to whom the Seraphim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
    ]
  },
  {
    id: 3,
    title: "Wednesday",
    content: "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Jeremiah, who said, 'O Virgin of Israel, thou shalt be built again.' And he said, 'The Virgin hath conceived a son, and hath given birth to Him; and He hath redeemed us from our sins, and hath delivered us from the hands of the enemy.' For thou art the Mother of the King of kings, the one to whom the Cherubim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
  },
  {
    id: 4,
    title: "Thursday",
    content: "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Ezekiel, who said, 'And the glory of the Lord came into the house by the way of the gate whose prospect is toward the east; and the gate was shut.' And he said, 'The Virgin hath conceived a son, and hath given birth to Him; and He hath redeemed us from our sins, and hath delivered us from the hands of the enemy.' For thou art the Mother of the King of kings, the one to whom the Seraphim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
  },
  {
    id: 5,
    title: "Friday",
    content: "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Daniel, who said, 'Thou art the stone that was cut out of the mountain without hands.' And he said, 'The Virgin hath conceived a son, and hath given birth to Him; and He hath redeemed us from our sins, and hath delivered us from the hands of the enemy.' For thou art the Mother of the King of kings, the one to whom the Cherubim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
  },
  {
    id: 6,
    title: "Saturday",
    content: "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Amos, who said, 'And I will raise up the tabernacle of David that is fallen.' And he said, 'The Virgin hath conceived a son, and hath given birth to Him; and He hath redeemed us from our sins, and hath delivered us from the hands of the enemy.' For thou art the Mother of the King of kings, the one to whom the Seraphim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
  },
  {
    id: 7,
    title: "Sunday",
    content: "I worship and glorify thee, O my Lady, the Holy Virgin, the Mother of God, together with the Prophet Micah, who said, 'And thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall He come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.' And he said, 'The Virgin hath conceived a son, and hath given birth to Him; and He hath redeemed us from our sins, and hath delivered us from the hands of the enemy.' For thou art the Mother of the King of kings, the one to whom the Cherubim bow down, the one who dwelleth in thy womb, He hath received the hymn from our mouths, and He hath delivered us from the hands of the enemy."
  }
];

const WudasieMariam = () => {
  // State variables for managing hymn data, current index, loading state, and errors.
  const [hymns, setHymns] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This effect runs once when the component mounts to fetch the data.
  useEffect(() => {
    // Simulate a data fetch with a Promise and a timeout.
    const fetchData = async () => {
      try {
        // Simulating a network request delay.
        await new Promise(resolve => setTimeout(resolve, 500));
        // Use the mock data instead of a fetch call to a non-existent file.
        const data = mockWudasieData; 
        
        // Check if the data is an array before setting the state.
        if (Array.isArray(data)) {
          setHymns(data);
        } else if (data && Array.isArray(data.hymns)) {
          setHymns(data.hymns);
        } else {
          throw new Error("Invalid data format: expected an array of hymns.");
        }
        setLoading(false);
      } catch (err) {
        // Handle any errors that occur during the "fetch" process.
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handler for navigating to the previous hymn.
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  // Handler for navigating to the next hymn.
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(hymns.length - 1, prev + 1));
  };

  // Handler for clicking a title in the navigation bar to jump to a specific hymn.
  const handleTitleClick = (index) => {
    setCurrentIndex(index);
  };

  // Display a loading message while the data is being "fetched".
  if (loading) {
    return <div className="wudasie loading">Loading hymns...</div>;
  }

  // Display an error message if the data "fetch" fails.
  if (error) {
    return <div className="wudasie error">Error: {error}</div>;
  }

  // Display a message if no hymns are available.
  if (hymns.length === 0) {
    return <div className="wudasie">No hymns available</div>;
  }

  // Get the current hymn based on the currentIndex state.
  const currentHymn = hymns[currentIndex];

  return (
    <div className='wudasie-container'>
      {/* Embedded CSS for styling the component */}
      <style>
        {`
        .wudasie-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fdfdfd;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          color: #333;
          display: flex;
          flex-direction: column;
        }

        .title-navbar {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 2rem;
          padding: 10px;
          background-color: #e8f5e9;
          border-radius: 8px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
        }

        .title-button {
          background-color: #c8e6c9;
          border: none;
          padding: 12px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 600;
          color: #1b5e20;
          transition: background-color 0.3s ease, transform 0.2s ease;
          flex-grow: 1;
          text-align: center;
          min-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .title-button:hover {
          background-color: #a5d6a7;
          transform: translateY(-2px);
        }

        .title-button.active {
          background-color: #43a047;
          color: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          transform: translateY(-2px);
        }

        .hymn-display {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          text-align: center;
          margin-bottom: 2rem;
        }

        .hymn-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2e7d32;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .hymn-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #4caf50;
          border-radius: 2px;
        }

        .hymn-content {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: justify;
        }

        .hymn-content p {
          margin-bottom: 1.5rem;
          text-indent: 1.5rem;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }

        .navigation-buttons button {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }

        .navigation-buttons button:hover {
          background-color: #388e3c;
          transform: translateY(-1px);
        }

        .navigation-buttons button:disabled {
          background-color: #a5d6a7;
          cursor: not-allowed;
          box-shadow: none;
        }

        .page-indicator {
          font-size: 1.2rem;
          font-weight: 500;
          color: #666;
        }

        @media (max-width: 600px) {
          .wudasie-container {
            padding: 1rem;
            margin: 1rem auto;
          }
          .title-navbar {
            flex-direction: column;
          }
          .title-button {
            min-width: unset;
          }
          .hymn-display {
            padding: 1.5rem;
          }
          .hymn-title {
            font-size: 1.8rem;
          }
          .hymn-content {
            font-size: 1rem;
          }
        }
        `}
      </style>
      
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
