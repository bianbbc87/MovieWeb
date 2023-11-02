import React, { useState } from 'react'
import Ad from './Ad';

export default function AdPage() {

  const [isAd, setIsAd] = useState(true);

    
  function handleToggleClick() {
    setIsAd(!isAd);
  }

  return (
    <div>
      <Ad isAd={isAd} />
      <button onClick={handleToggleClick}>광고 보기</button>
    </div>
  )
}
