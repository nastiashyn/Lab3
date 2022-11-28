import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ColorsCard = ({ item, className, ...props }) => {
  return (
    <Link to={`palette/${item.id}`} className="card" {...props}>
      <div className="card__colors">
        {item.colors.map((color, index) => {
          return <div style={{ background: `${color.color}` }} className="card__colors-one" key={index} />
        })}
      </div>
      <div className="card__title">
        <h3>{item.paletteName}</h3>
        <div>{item.emoji}</div>
      </div>
    </Link>
  );
};

export default ColorsCard;
