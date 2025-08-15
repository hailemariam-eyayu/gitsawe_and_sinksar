import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';

// Ethiopian Calendar Converter
const toEthiopianDate = (gcDate) => {
  const gcYear = gcDate.getFullYear();
  const gcMonth = gcDate.getMonth() + 1;
  const gcDay = gcDate.getDate();

  let ecYear = gcYear - 7;
  const newYearDay = (gcYear % 4 === 3) ? 12 : 11;

  if (gcMonth < 9 || (gcMonth === 9 && gcDay < newYearDay)) {
    ecYear -= 1;
  }

  const gcDateInYear = (gcMonth - 1) * 30 + gcDay;
  const ecNewYearInGC = (9 - 1) * 30 + newYearDay;

  let diff = gcDateInYear - ecNewYearInGC;
  if (diff < 0) diff += 365;

  const ecMonth = Math.floor(diff / 30) + 1;
  const ecDay = (diff % 30) + 1;

  return { ecYear, ecMonth, ecDay };
};

const amharicDays = ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'እሮብ', 'ሐሙስ', 'አርብ', 'ቅዳሴ'];
const amharicMonths = [
  'መስከረም', 'ጥቅምት', 'ህዳር', 'ታህሳስ', 'ጥር', 'የካቲት', 
  'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'
];

const Home = () => {
  // Calendar states
  const [currentTime, setCurrentTime] = useState(new Date());
  const [output, setOutput] = useState('');

  // Format dates
  const gcDateStr = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const gcTimeStr = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const ethDate = toEthiopianDate(currentTime);
  const ecMonthName = amharicMonths[ethDate.ecMonth - 1] || ethDate.ecMonth;
  const ecDateStr = `${ecMonthName} ${ethDate.ecDay}, ${ethDate.ecYear}`;
  const ecDayOfWeek = amharicDays[currentTime.getDay()];

  return (
    <div className="home-container">
      <Header />
      
      {/* Calendar Section */}
      <div className="calendar-section">
        <div className="date-row">
          <div className="calendar-card">
            <div className="calendar-label">Gregorian Calendar (GC)</div>
            <div className="calendar-value">{gcDateStr}</div>
          </div>
          
          <div className="day-center">
            <div className="day-label">Day of Week</div>
            <div className="day-value">{ecDayOfWeek}</div>
          </div>
          
          <div className="calendar-card">
            <div className="calendar-label">Ethiopian Calendar (EC)</div>
            <div className="calendar-value">{ecDateStr}</div>
          </div>
        </div>
        
        <div className="time-row">
          <div className="time-label">Current Time</div>
          <div className="time-value">{gcTimeStr}</div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={() => setOutput('የሐሙስ ውዳሴ ማርያም በቅርቡ ይካተታል')}>
          የሐሙስ ውዳሴ ማርያም ይመልከቱ
        </button>
        <button onClick={() => setOutput('የዕለቱን የቅዱሳን ታሪክ በቅርቡ ይካተታል')}>
          የዕለቱን የቅዱሳን ታሪክ ይመልከቱ
        </button>
        <button onClick={() => setOutput('ለዕለቱ የተመረጡትን የመጽሐፍ ቅዱስ ክፍል  በቅርቡ ይካተታል')}>
          ለዕለቱ የተመረጡትን የመጽሐፍ ቅዱስ ክፍል ይመልከቱ
        </button>
      </div>
      
      <div className="output-display">{output}</div>
      
      <div className="section-divider"></div>
      
    </div>
  );
};

export default Home;