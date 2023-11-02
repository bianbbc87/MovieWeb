import React from 'react'
import AdImage from '../images/AdImage.svg';
import styled from 'styled-components';

const UMCAd = styled.img`
width: 100%; 
`

export default function Ad({ isAd }) {
  return (
    <div>
      {isAd ? <UMCAd src={AdImage} alt="Ad" /> : null};
    </div>
  )
}
