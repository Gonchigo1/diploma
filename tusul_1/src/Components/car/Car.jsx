import React from 'react';
import './Car.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import camry_1 from '../assets/camry_1.png';

export const Car = () => {
  return (
    <div className='car'>
      <div className='car-left'>
        <h2>Сайн байна уу?</h2>
        <div>
          <div className='hero-hand-icon'>
          </div>
         
          {/* <img src={hand_icon} alt='' /> */}
          <p>Та автомашины эвдрэл, гэмтлийн үнэлгээ хийхэд заавал өөрийн биеэр очих шаардлагагүй боллоо    </p>
        
        </div>
        <div className='car-latest-btn'>
          <div>Үнэлгээ</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='car_right'>
        <img src={camry_1} alt='' />
      </div>
    </div>
  );
};

export default Car;
