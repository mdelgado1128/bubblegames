import React from 'react';
import Logo from '../images/BGLogo.png'

console.log(Logo);

function BGLogo() {
  // Import result is the URL image
  return <img src={Logo} alt="Bubbles Games" />;
}

export default BGLogo;