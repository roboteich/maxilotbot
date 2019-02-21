import React from 'react';

const DEFAULT_STATE = {
  sound: {
    src:'',
    loop: false
  },
  playSound: () => {}
}
const  SoundContext = React.createContext(DEFAULT_STATE);

export default SoundContext
