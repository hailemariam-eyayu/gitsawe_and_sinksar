// BahireHasab.jsx
import React, { useState } from "react";
import "./BahireHasab.css";

export default function BahireHasab() {
  const [gregorianDate, setGregorianDate] = useState("");
  const [ethiopianDate, setEthiopianDate] = useState(null);
  const [results, setResults] = useState(null);

  const handleConvert = () => {
    if (!gregorianDate) return;

    const date = new Date(gregorianDate);
    const ethiopian = toEthiopian(date);
    setEthiopianDate(ethiopian);

    const calc = calculateBahireHasab(ethiopian.year, ethiopian.month, ethiopian.day);
    setResults(calc);
  };

  // Gregorian → Ethiopian conversion
  const toEthiopian = (date) => {
    const gcYear = date.getFullYear();
    const gcMonth = date.getMonth() + 1;
    const gcDay = date.getDate();

    let year = gcYear - 7;
    const newYearDay = (gcYear % 4 === 3) ? 12 : 11;

    if (gcMonth < 9 || (gcMonth === 9 && gcDay < newYearDay)) {
      year -= 1;
    }

    const gcDateInYear = (gcMonth - 1) * 30 + gcDay;
    const ecNewYearInGC = (9 - 1) * 30 + newYearDay;

    let diff = gcDateInYear - ecNewYearInGC;
    if (diff < 0) diff += 365;

    const month = Math.floor(diff / 30) + 1;
    const day = (diff % 30) + 1;

    return { year, month, day };
  };

  // Full Bahire Hasab Calculation
  const calculateBahireHasab = (year, month, day) => {
    // Helper functions
    const calculateWenber = (y) => {
      let c = (y + 5500) % 532;
      if (c === 0) return 18;
      c %= 19;
      return c === 0 ? 18 : c - 1;
    };

    const getWeek = (z) => {
      const days = {
        1: { name: "ማግሰኞ", tewsak: 5 },
        2: { name: "ረቡዕ", tewsak: 4 },
        3: { name: "ኀሙስ", tewsak: 3 },
        4: { name: "ዓርብ", tewsak: 2 },
        5: { name: "ቀዳሚት ሰንበት", tewsak: 8 },
        6: { name: "ሰንበተ ክርስትያን ቅድስት", tewsak: 7 },
        0: { name: "ሰኞ", tewsak: 6 }
      };
      return days[z] || { name: "የተሳሳተ", tewsak: 0 };
    };

    const getWeekday = (date, month, sep1) => {
      const z = (date - 1 + 2 * (month - 1) + sep1) % 7;
      return getWeek(z).name;
    };

    const getWeekT = (date, month, sep1) => {
      const z = (date - 1 + 2 * (month - 1) + sep1) % 7;
      return getWeek(z).tewsak;
    };

    const getLeapYearName = (leapYear) => {
      return ["ዮሐንስ", "ማቴዎስ", "ማርቆስ", "ሉቃስ"][leapYear] || "የተሳሳተ";
    };

    const getDay = (date, month, sep1) => {
      const z = ((date - 1) + 2 * (month - 1) + sep1) % 7;
      return getWeek(z).name;
    };

    const isLeapYear = (y) => (y + 5500) % 4 === 3;

    const addEthiopianDays = (year, month, day, daysToAdd) => {
      let totalDays = (month - 1) * 30 + day;

      // Handle Pagume
      if (month > 12) {
        totalDays += isLeapYear(year) ? 6 : 5;
      }

      totalDays += daysToAdd;

      // Adjust year if needed
      const daysInYear = isLeapYear(year) ? 366 : 365;
      if (totalDays > daysInYear) {
        year++;
        totalDays -= daysInYear;
      }

      // Calculate new date
      let newMonth = Math.floor((totalDays - 1) / 30) + 1;
      let newDay = (totalDays - 1) % 30 + 1;

      // Handle Pagume in new year
      if (newMonth > 12) {
        newMonth = 13;
        newDay = totalDays - 360;
      }

      return `${newDay}/${newMonth}/${year}`;
    };

    // Main calculation
    const wenber1 = calculateWenber(year);
    const Abeqtie = (11 * wenber1) % 30;
    const Metqie = Abeqtie === 0 ? 30 : (19 * wenber1) % 30;
    const MeteneRabit = Math.floor((year + 5500) / 4);
    const leapYear = (year + 5500) % 4;
    const leapYearName = getLeapYearName(leapYear);
    const toSep = (MeteneRabit + year + 5500) % 7;

    // Calculate BMT
    let BMT, bmt;
    let tewsakDay; // declare here

    if (Metqie >= 15) {
      BMT = (30 + Metqie) % 30;
      if (BMT === 0) BMT = 30;
      const Mtday = getWeekday(BMT, 1, toSep);
      tewsakDay = getWeekT(BMT, 1, toSep); // assign here

      bmt = `ቀኑ፡ መስከረም / ${BMT} / ${year} - ${Mtday}`;
    } else {
      BMT = Metqie % 30;
      const Mtday = getWeekday(BMT, 2, toSep);
      tewsakDay = getWeekT(BMT, 2, toSep); // assign here
      bmt = `ቀኑ፡ ጥቅምት / ${BMT} / ${year} - ${Mtday}`;
    }

    // Now tewsakDay is visible here
    const MebajaHamer = (BMT + tewsakDay) % 30 || 30;

    // Calculate other values
    const Lelit = Abeqtie + Math.floor(month / 2) + day;
    const Werih = Lelit + 4;
    const Ilet = getWeekday(day, month, toSep);

    // Calculate holidays
    const calculateHoliday = (daysToAdd) => {
      return addEthiopianDays(year, 6, MebajaHamer, daysToAdd);
    };

    return {
      wenber1,
      Abeqtie,
      Metqie,
      MebajaHamer,
      Lelit,
      Werih,
      Mealt: day,
      Ilet,
      leapYearName,
      MeteneRabit,
      sep1: `መስከረም 1: ${getWeekday(1, 1, toSep)}`,
      bmt,
      nn: `${calculateHoliday(0)}: ሰኞ`,
      ay: `${calculateHoliday(14)}: ሰኞ`,
      dz: `${calculateHoliday(41)}: እሁድ`,
      hn: `${calculateHoliday(62)}: እሁድ`,
      st: `${calculateHoliday(67)}: ዓርብ`,
      ta: `${calculateHoliday(69)}: እሁድ`,
      rc: `${calculateHoliday(93)}: ረቡዕ`,
      it: `${calculateHoliday(108)}: ሐሙስ`,
      ps: `${calculateHoliday(118)}: እሁድ`,
      hw: `${calculateHoliday(119)}: ሰኞ`,
      dt: `${calculateHoliday(121)}: ረቡዕ`,
      tir: getDay(21, 5, toSep),
      sep17: getDay(17, 1, toSep),
      meg: getDay(29, 6, toSep)
    };
  };

  // Render result items
  const renderResultItem = (label, value) => (
    <div className="result-item">
      <span className="result-label">{label}</span>
      <span className="result-value">{value}</span>
    </div>
  );

  return (
    <div className="bahire-container">
      <h2 className="title">G.C → E.C + ባሕረ ሐሳብ</h2>

      <div className="input-section">
        <div className="date-input">
          <label>የግሪጎሪያን ቀን:</label>
          <input
            type="date"
            value={gregorianDate}
            onChange={(e) => setGregorianDate(e.target.value)}
          />
          <button onClick={handleConvert}>አስላ</button>
        </div>
      </div>

      {ethiopianDate && (
        <div className="result-section">
          <h3>የኢትዮጵያ ቀን:</h3>
          <p>{ethiopianDate.day}/{ethiopianDate.month}/{ethiopianDate.year}</p>
        </div>
      )}

      {results && (
        <div className="results-container">
          <h3>የባሕረ ሐሳብ ውጤቶች:</h3>

          <div className="result-group">
            {renderResultItem('ወንበር:', results.wenber1)}
            {renderResultItem('አበቅቴ:', results.Abeqtie)}
            {renderResultItem('መጥቅዕ:', results.Metqie)}
            {renderResultItem('መባጃ ሐመር:', results.MebajaHamer)}
          </div>

          <div className="result-group">
            {renderResultItem('ሠርቀ ለሊት:', results.Lelit)}
            {renderResultItem('ሠርቀ ወርኅ:', results.Werih)}
            {renderResultItem('ሠርቀ መዐልት:', results.Mealt)}
            {renderResultItem('ሠርቀ ዕለት:', results.Ilet)}
          </div>

          <div className="result-group">
            {renderResultItem('ወንጌል:', results.leapYearName)}
            {renderResultItem('መስከረም 1:', results.sep1)}
            {renderResultItem('በዓለ መጥቅዕ:', results.bmt)}
          </div>

          <div className="result-group">
            {renderResultItem('ነነዌ:', results.nn)}
            {renderResultItem('አብይ ጾም:', results.ay)}
            {renderResultItem('ደብረ ዘይት:', results.dz)}
          </div>

          <div className="result-group">
            {renderResultItem('ሆሣዕና:', results.hn)}
            {renderResultItem('ስቅለት:', results.st)}
            {renderResultItem('ትንሳኤ:', results.ta)}
          </div>

          <div className="result-group">
            {renderResultItem('ርክበ ካህናት:', results.rc)}
            {renderResultItem('ዕርገት:', results.it)}
            {renderResultItem('ጰራቅሊጦስ:', results.ps)}
          </div>

          <div className="result-group">
            {renderResultItem('ጾመ ሐዋርያት:', results.hw)}
            {renderResultItem('ጾመ ድኅነት:', results.dt)}
            {renderResultItem('ጥምቀት:', results.tir)}
          </div>

          <div className="result-group">
            {renderResultItem('መስከረም 17:', results.sep17)}
            {renderResultItem('መጋቢት 29:', results.meg)}
          </div>
        </div>
      )}
    </div>
  );
}