import React from 'react';
import './Card.css';

const Card = ({ title, item_names = [], item_images = [], item_links = [] }) => {
  return (
    <div className='card'>
      <div className='card_title'>
      <h3>{title}</h3>
      </div>
      
      <div className='card_inner'>
        {item_names.length > 0 && item_names.map((item_name, index) => (
          <div key={index} className='item'>
            <img src={item_images[index]} alt />
            <a target='_blank' href={item_links[index]}>{item_name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
