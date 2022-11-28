import React from 'react';
import { DATA } from '../../utils/constants';
import ColorsCard from "../../components/colors-card";

import './styles.scss'

const HomePage = () => {

  return (
    <div className="home container">
      <div className="home__wrapper">
        {DATA.map((item) => (<ColorsCard item={item} key={item.id} />)
        )}
      </div>

    </div>

  );
};

export default HomePage;
