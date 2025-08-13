import React, { useState, useEffect } from 'react';

// Mock data to simulate the content of external JSON files.
// In a real application, these would be separate files (e.g., Meskerem.json)
// and fetched from a server.
const mockSinksarData = {
  "Meskerem": {
    days: [
      { id: 1, title: "Commemoration of St. John the Baptist", content: "On this day, we commemorate the beheading of St. John the Baptist and his great feast." },
      { id: 2, title: "Departure of St. Mark the Evangelist", content: "On this day, the Holy Evangelist St. Mark departed from this world after a life of service." },
      { id: 3, title: "Martyrdom of St. Stephen", content: "The commemoration of the martyrdom of St. Stephen, the first martyr of the Christian Church." },
      { id: 4, title: "The Holy Trinity", content: "On this day, we celebrate the Holy Trinity: the Father, the Son, and the Holy Spirit." },
      { id: 5, title: "Feast of the Cross (Meskel)", content: "A major feast celebrating the discovery of the True Cross by Queen Helena." },
      { id: 6, title: "Departure of St. Michael the Archangel", content: "Commemoration of the Archangel Michael's departure to heaven." },
      { id: 7, title: "Commemoration of St. Gabriel the Archangel", content: "A feast dedicated to the Archangel Gabriel, the messenger of God." },
      { id: 8, title: "Departure of Abuna Takla Haymanot", content: "The day Abuna Takla Haymanot, a great Ethiopian saint, departed." },
      { id: 9, title: "Martyrdom of St. George", content: "Commemoration of St. George, the great martyr." },
      { id: 10, title: "Feast of St. Mary", content: "A special feast dedicated to the Virgin Mary, Mother of God." },
      { id: 11, title: "Departure of Abuna Gebre Menfes Kidus", content: "The departure of another great Ethiopian Saint." },
      { id: 12, title: "Commemoration of St. John the Evangelist", content: "We remember St. John the Evangelist, one of the twelve apostles." },
      { id: 13, title: "Feast of St. Tekle Haimanot", content: "A great feast day for the Ethiopian saint, Tekle Haimanot." },
      { id: 14, title: "Martyrdom of St. Peter and St. Paul", content: "The commemoration of the martyrdom of two great apostles." },
      { id: 15, title: "Commemoration of St. Cyriacus", content: "The feast of St. Cyriacus, a child martyr." },
      { id: 16, title: "Feast of St. Gabriel", content: "Another day dedicated to the Archangel Gabriel." },
      { id: 17, title: "Departure of St. Minas", content: "Commemoration of St. Minas, a military saint." },
      { id: 18, title: "Feast of St. Michael", content: "A great feast for the Archangel Michael." },
      { id: 19, title: "Commemoration of St. Abib", content: "The feast of St. Abib, a holy man." },
      { id: 20, title: "Departure of St. Qirqos", content: "The day the child martyr, Qirqos, departed." },
      { id: 21, title: "Feast of St. Mary", content: "Another celebration of the Virgin Mary." },
      { id: 22, title: "Commemoration of St. Thomas", content: "We remember St. Thomas, one of the twelve apostles." },
      { id: 23, title: "Martyrdom of St. Ewnatos", content: "The martyrdom of St. Ewnatos." },
      { id: 24, title: "Feast of St. Joseph", content: "A feast for St. Joseph, the foster-father of Jesus." },
      { id: 25, title: "Commemoration of St. Mercurius", content: "The feast of St. Mercurius, a military saint." },
      { id: 26, title: "Departure of St. John the Gold-Mouthed", content: "The departure of St. John Chrysostom." },
      { id: 27, title: "Feast of St. Gebre Kristos", content: "A feast dedicated to the saint Gebre Kristos." },
      { id: 28, title: "Commemoration of St. Takla Haymanot", content: "Another day to remember Abuna Takla Haymanot." },
      { id: 29, title: "Martyrdom of St. Basilides", content: "The martyrdom of St. Basilides." },
      { id: 30, title: "Feast of St. Stephen the First Martyr", content: "Another feast day for St. Stephen." },
    ],
  },
  "Tikimt": {
    days: [
      { id: 1, title: "Feast of St. Meskerem", content: "The first day of Tikimt, marking a new month in the Sinksar calendar." },
      { id: 2, title: "Commemoration of Abba Kiros", content: "Remembering the hermit Abba Kiros." },
      { id: 3, title: "Martyrdom of Abba Theodosius", content: "The martyrdom of the blessed abbot Theodosius." },
      { id: 4, title: "Departure of St. Philip", content: "The departure of St. Philip the Apostle." },
      { id: 5, title: "Feast of St. Eustathius", content: "The feast of St. Eustathius, a great saint." },
      { id: 6, title: "Commemoration of St. Gabriel", content: "A day to honor Archangel Gabriel." },
      { id: 7, title: "Departure of St. Demetrius", content: "The day St. Demetrius departed." },
      { id: 8, title: "Martyrdom of St. Paul of Tarsus", content: "The martyrdom of the Apostle Paul." },
      { id: 9, title: "Commemoration of St. Anthony the Great", content: "A day to remember the Father of all monks." },
      { id: 10, title: "Feast of St. Peter", content: "A feast day for St. Peter the Apostle." },
      { id: 11, title: "Departure of St. Athanasius", content: "The departure of St. Athanasius the Great." },
      { id: 12, title: "Commemoration of St. George", content: "Remembering St. George the martyr." },
      { id: 13, title: "Feast of St. Thekla", content: "A feast for St. Thekla, a female martyr." },
      { id: 14, title: "Martyrdom of St. Basil", content: "The martyrdom of St. Basil the Great." },
      { id: 15, title: "Feast of St. Cyriacus", content: "Another feast of the child martyr Cyriacus." },
      { id: 16, title: "Departure of St. John the Baptist", content: "The commemoration of St. John the Baptist's departure." },
      { id: 17, title: "Commemoration of St. Joseph", content: "Remembering St. Joseph, the father of Jesus." },
      { id: 18, title: "Feast of St. Michael the Archangel", content: "The monthly commemoration of Archangel Michael." },
      { id: 19, title: "Departure of St. Aregawi", content: "The departure of Abuna Aregawi." },
      { id: 20, title: "Feast of St. Abba Samuel", content: "A feast for the blessed Abba Samuel." },
      { id: 21, title: "Feast of St. Mary", content: "Another day to celebrate the Virgin Mary." },
      { id: 22, title: "Martyrdom of St. Demetrios", content: "The martyrdom of the great martyr Demetrios." },
      { id: 23, title: "Commemoration of St. Tekle Haimanot", content: "Another feast day for Abuna Tekle Haimanot." },
      { id: 24, title: "Departure of Abuna Yacob", content: "The day Abuna Yacob departed this world." },
      { id: 25, title: "Feast of St. Yared", content: "A feast for the great Ethiopian scholar and musician, St. Yared." },
      { id: 26, title: "Commemoration of St. Minas", content: "Another day to honor the military saint Minas." },
      { id: 27, title: "Martyrdom of St. George", content: "The commemoration of the martyrdom of St. George." },
      { id: 28, title: "Feast of St. Yesehaq", content: "A feast for St. Yesehaq." },
      { id: 29, title: "Commemoration of St. Gabriel", content: "Another feast day for the Archangel Gabriel." },
      { id: 30, title: "Departure of Abuna Hiriakos", content: "The departure of Abuna Hiriakos." },
    ],
  },
};

const months = [
  "Meskerem", "Tikimt", "Hidar", "Tahsas",
  "Tir", "Yekatit", "Megabit", "Miazia",
  "Ginbot", "Sene", "Hamle", "Nehasse", "Pagume"
];

const Sinksar = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [monthData, setMonthData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dayData, setDayData] = useState(null); 
  const [abortController, setAbortController] = useState(null);

  // Fetch month data when selectedMonth changes
  useEffect(() => {
    if (!selectedMonth) return;

    // Create new AbortController for this fetch request
    const controller = new AbortController();
    setAbortController(controller);

    const fetchMonthData = async () => {
      setLoading(true);
      setError(null);
      setDayData(null); 
      setSelectedDay(null); 
      setMonthData([]); 

      try {
        // We'll use mock data as fetching from external files is not supported
        // in this environment. In a real app, this would be a fetch call.
        const response = await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            if (controller.signal.aborted) {
              reject(new DOMException('Aborted', 'AbortError'));
            } else {
              const data = mockSinksarData[selectedMonth];
              if (data) {
                resolve({
                  ok: true,
                  json: () => Promise.resolve(data)
                });
              } else {
                resolve({
                  ok: false,
                  status: 404
                });
              }
            }
          }, 500); // Simulate network delay
          
          controller.signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new DOMException('Aborted', 'AbortError'));
          });
        });
        
        if (!response.ok) {
          throw new Error(`Failed to load ${selectedMonth} data`);
        }
        
        const data = await response.json();
        if (data && Array.isArray(data.days)) {
          setMonthData(data.days);
        } else {
          throw new Error('Invalid data format: "days" array not found');
        }
      } catch (err) {
        // Only set error if it's not an abort error 
        if (err.name !== 'AbortError') { 
          setError(err.message); 
          setMonthData([]); 
        } 
      } finally {
        setLoading(false);
      }
    };

    fetchMonthData();

    // Cleanup function to abort fetch if component unmounts 
    return () => { 
      if (controller) { 
        controller.abort(); 
      } 
    }; 
  }, [selectedMonth]); 

  // Update dayData when selectedDay or monthData changes 
  useEffect(() => { 
    if (selectedDay !== null && Array.isArray(monthData)) { 
      const foundDay = monthData.find(item => String(item.id) === String(selectedDay)); 
      setDayData(foundDay || null); 
    } else { 
      setDayData(null); 
    } 
  }, [selectedDay, monthData]); 

  const handleMonthClick = (month) => {
    // Abort any ongoing fetch when changing month 
    if (abortController) { 
      abortController.abort(); 
    } 
    setSelectedMonth(month); 
  }; 

  // Get days in month (Pagume is 5 days, rest 30) 
  const getDaysForMonth = (month) => {
    if (month === "Pagume") return Array.from({ length: 5 }, (_, i) => i + 1); 
    return Array.from({ length: 30 }, (_, i) => i + 1); 
  }; 

  // Navigation handlers 
  const handlePrev = () => { 
    if (selectedDay === null || selectedMonth === null) return; 
    
    const currentMonthIndex = months.indexOf(selectedMonth); 
    
    if (selectedDay === 1) { 
      // Navigate to previous month 
      const newMonthIndex = currentMonthIndex === 0 ? months.length - 1 : currentMonthIndex - 1; 
      const newMonth = months[newMonthIndex]; 
      setSelectedMonth(newMonth); 
      setSelectedDay(getDaysForMonth(newMonth).length); // Last day of previous month 
    } else { 
      // Previous day in same month 
      setSelectedDay(selectedDay - 1); 
    } 
  }; 

  const handleNext = () => { 
    if (selectedDay === null || selectedMonth === null) return; 
    
    const currentMonthIndex = months.indexOf(selectedMonth); 
    const daysInMonth = getDaysForMonth(selectedMonth); 
    
    if (selectedDay === daysInMonth.length) { 
      // Navigate to next month 
      const newMonthIndex = (currentMonthIndex + 1) % months.length; 
      const newMonth = months[newMonthIndex]; 
      setSelectedMonth(newMonth); 
      setSelectedDay(1); // First day of next month 
    } else { 
      // Next day in same month 
      setSelectedDay(selectedDay + 1); 
    } 
  }; 

  const handleFirstDay = () => {
    if (selectedMonth === null) return;
    setSelectedDay(1);
  };

  const handleLastDay = () => {
    if (selectedMonth === null) return;
    const daysInMonth = getDaysForMonth(selectedMonth);
    setSelectedDay(daysInMonth.length);
  };

  return (
    <div className='sinksar-container'> 
      <style>
        {`
        .sinksar-container {
          font-family: sans-serif;
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f7f7f7;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          text-align: center;
          color: #666;
          margin-bottom: 2rem;
        }

        .month-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 2rem;
        }

        .month-btn {
          background-color: #e2e8f0;
          border: none;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .month-btn:hover {
          background-color: #cbd5e1;
        }

        .month-btn.active {
          background-color: #4f46e5;
          color: white;
          transform: scale(1.05);
        }

        .loading {
          text-align: center;
          color: #4f46e5;
          margin-top: 1rem;
        }

        .error {
          text-align: center;
          color: #dc2626;
          margin-top: 1rem;
        }

        .days-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
          gap: 8px;
          padding: 1rem;
          background-color: #f0f4f8;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .day-btn {
          background-color: #fff;
          border: 1px solid #e2e8f0;
          padding: 10px 5px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .day-btn:hover {
          background-color: #f1f5f9;
        }

        .day-btn.active {
          background-color: #047857;
          color: white;
        }

        .content-display {
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .navigation-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .nav-btn-group {
          display: flex;
          gap: 8px;
        }

        .nav-btn {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.2s ease;
        }

        .nav-btn:hover {
          background-color: #2563eb;
        }

        .nav-btn:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }
        
        .first-last-btn {
          background-color: #8b5cf6;
        }
        
        .first-last-btn:hover {
          background-color: #7c3aed;
        }

        .date-info {
          text-align: center;
        }

        .date-info h3 {
          font-size: 1.5rem;
          margin: 0;
          color: #4f46e5;
        }

        .date-info p {
          font-size: 1rem;
          color: #9ca3af;
          margin: 0.5rem 0 0;
        }

        .content {
          margin-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          padding-top: 1.5rem;
        }
        
        .content p {
          text-align: left;
          color: #333;
          margin-bottom: 1rem;
        }
        `}
      </style>
      <h2>Welcome to Sinksar Page</h2> 
      <p>Select a month and day to view its details.</p> 

      {/* Month Buttons */} 
      <div className="month-container"> 
        {months.map((month) => ( 
          <button 
            key={month} 
            className={`month-btn ${selectedMonth === month ? 'active' : ''}`} 
            onClick={() => handleMonthClick(month)} 
            disabled={loading} 
          > 
            {month} 
          </button> 
        ))} 
      </div> 

      {/* Loading and Error */} 
      {loading && <div className="loading">Loading {selectedMonth} data...</div>} 
      {error && <div className="error">Error: {error}</div>} 

      {/* Days Buttons */} 
      {selectedMonth && monthData.length > 0 && !loading && ( 
        <div className="days-container"> 
          {getDaysForMonth(selectedMonth).map((day) => ( 
            <button 
              key={day} 
              className={`day-btn ${selectedDay === day ? 'active' : ''}`} 
              onClick={() => setSelectedDay(day)} 
            > 
              {day} 
            </button> 
          ))} 
        </div> 
      )} 

      {/* Display Selected Day Content with Navigation */} 
      {dayData && ( 
        <div className="content-display"> 
          <div className="navigation-controls"> 
            <div className="nav-btn-group">
              <button 
                onClick={handleFirstDay}
                disabled={loading}
                className="nav-btn first-last-btn" 
              >
                First Day
              </button>
              <button  
                onClick={handlePrev} 
                disabled={loading} 
                className="nav-btn" 
              > 
                &larr; Previous 
              </button> 
            </div>
            
            <div className="date-info"> 
              <h3>{dayData.title}</h3> 
              <p>{selectedMonth} - Day {selectedDay}</p> 
            </div> 
            
            <div className="nav-btn-group">
              <button  
                onClick={handleNext} 
                disabled={loading} 
                className="nav-btn" 
              > 
                Next &rarr; 
              </button> 
              <button
                onClick={handleLastDay}
                disabled={loading}
                className="nav-btn first-last-btn" 
              >
                Last Day
              </button>
            </div>
          </div> 
          
          <div className="content"> 
            {Array.isArray(dayData.content) ? ( 
              dayData.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>) 
            ) : ( 
              <p>{dayData.content}</p> 
            )} 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 

export default Sinksar;