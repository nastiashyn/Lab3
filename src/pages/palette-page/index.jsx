import React, { useState } from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from "react-router-dom";
import { DATA } from '../../utils/constants';
import LoundSound from '../../components/icons/LoundSound';
import MuteSound from '../../components/icons/MuteSound';
import sound from './src_notify.mp3';

import './styles.scss';

const PHRASES = ['Right one!', 'GOT IT!', 'Copied!', 'Will do!', 'Paste me!', 'Right now!', 'it\'ll rock']

const PalletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOnSound, setIsOnSound] = useState(true);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const [activeColor, setActiveColor] = useState(null);
  const [randomPhrase, setRandomPhrase] = useState('')

  const pallete = DATA.find(item => item.id === location.pathname.split('/')[2]);

  const handleBack = () => {
    navigate('/')
  }

  const handleCopyColor = (color) => {

    setRandomPhrase(PHRASES[Math.round(Math.random() * ((PHRASES.length - 1) - 0))])
    setActiveColor(color)
    setIsOpenModel(true)
    isOnSound && new Audio(sound).play();
    navigator.clipboard.writeText(color.color);

    setTimeout(() => {
      setActiveColor(null)
      setIsOpenModel(false)
    }, 2000);
  }

  const handleChangeSound = () => setIsOnSound(!isOnSound)

  return (
    <div className="pallete">

      <div className="pallete__header">
        <button onClick={handleBack} className="pallete__button"><span className="left-arrow" /> Back</button>
        <h2>{`${pallete.paletteName} ${pallete.emoji}`}</h2>
        <div className="pallete__sound" onClick={handleChangeSound}>{`Sound ${isOnSound ? 'on' : 'off'}`}{isOnSound ? <LoundSound /> : <MuteSound />}</div>
      </div>
      <div className="pallete__colors">
        {pallete.colors.map((color, index) => {
          return (<div className="pallete__colors-one" style={{ background: color.color }} key={index} onClick={() => handleCopyColor(color)}>
            <p>{color.name}</p>
            <button>Copy</button>
          </div>)
        })}
      </div>
      {<div className={cn("pallete__model", { visible: isOpenModel && activeColor })} style={{ background: activeColor && isOpenModel ? activeColor.color : 'inherit' }}><div className="pallete__content">{randomPhrase}
      </div><p>{activeColor ? activeColor.color : ''}</p></div>}
    </div>
  );
};

export default PalletePage;
