import React from 'react';
import LifeIcon from './LifeIcon';
import { IconsArray } from '../constant/HangmanConstant';

const style = {
  commonIconStyle: {
    fontSize: 60
  }
};

const LifeBox = ({ livesLeft }) => {
  return (
    <>
      <span style={style.commonIconStyle}>
        LIVES :
        {IconsArray.map((val, i) => (
          <LifeIcon isAvailable={livesLeft > i} />
        ))}
      </span>
    </>
  );
};

export default LifeBox;
