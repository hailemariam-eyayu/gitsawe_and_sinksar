import React from 'react'
import './Seatat.css'
import { useState } from 'react';

const Seatat = () => {
  const [output, setOutput] = useState('');
  return (
    <div className='seatat-container'>
      <div className='seatat'>
        <div className="top">
          መጽሐፈ ሰአታት  በአባታችን በአባ ጊዮርጊስ ዘጋስጫ የተደረሰና ክትውልድ ወደ ትውልድ እየተላለፈ ያለ የቤተ ክርስትያን የዜማ መጽሐፍ ነው። በነገራችን ላይ አሁን ተጠርዞ የምናገኘው የሌሎችም ቅዱሳን ድርሰት ጭምር ነው። ለምሳሌ ብናነሳ፡ ንጉስ አጼ ገላውዴዎስ፣ ልብነ ድንግል እና ሌሎችም ...
        </div>
        <div className="content">
          <div className="left-links">
            <ul className='list-items'>
              <li className='list-item' onClick={() => setOutput('ሃሌ በቅርቡ ይካተታል')}>ሃሌ</li>
              <li className='list-item' onClick={() => setOutput('ሚካኤል በቅርቡ ይካተታል')}>ሚካኤል</li>
              <li className='list-item' onClick={() => setOutput('መልክዐ ፍልሰታ በቅርቡ ይካተታል')}>መልክዐ ፍልሰታ</li>
              <li className='list-item' onClick={() => setOutput('በሌሊት አንሥኡ በቅርቡ ይካተታል')}>በሌሊት አንሥኡ</li>
              <li className='list-item' onClick={() => setOutput('ተፈሥሒ ማርያም በቅርቡ ይካተታል')}>ተፈሥሒ ማርያም</li>
              <li className='list-item' onClick={() => setOutput('ስብሐተ ፍቁር በቅርቡ ይካተታል')}>ስብሐተ ፍቁር</li>
              <li className='list-item' onClick={() => setOutput('ለኖኅ ሐመሩ በቅርቡ ይካተታል')}>ለኖኅ ሐመሩ</li>
              <li className='list-item' onClick={() => setOutput('መሐረነ አብ በቅርቡ ይካተታል')}>መሐረነ አብ</li>
              <li className='list-item' onClick={() => setOutput('መልክዐ ስዕል በቅርቡ ይካተታል')}>መልክዐ ስዕል </li>
              <li className='list-item' onClick={() => setOutput('መልክዐ ውዳሴ በቅርቡ ይካተታል')}>መልክዐ ውዳሴ</li>
              <li className='list-item' onClick={() => setOutput('መልክዐ ውዳሴ በቅርቡ ይካተታል')}>እሴብሕ ጸጋኪ</li>
              <li className='list-item' onClick={() => setOutput('ኪዳን ወመስተበቁዕ')}>ኪዳን ወመስተበቁዕ</li>
              <li className='list-item' onClick={() => setOutput('ሊጦን በቅርቡ ይካተታል')}>ሊጦን</li>
              <li className='list-item' onClick={() => setOutput('መልክዐ ቁርባን በቅርቡ ይካተታል')}>መልክዐ ቁርባን</li>
            </ul>
          </div>
          <div className="right-content">
            {output}  <br /><br /><br />
          </div>
        </div>
        <div className="bottom">
          የአባቶቻችን በረከት ረድኤት ይደርብን/ይድረሰን፣ ሃገራችን ሰላም ያድርግልን። እኔን ኃጢአተኛውን ገብረ ጊዮርጊስን በጸሎታችሁ አስቡኝ!
        </div>
      </div>
    </div>
  )
}

export default Seatat