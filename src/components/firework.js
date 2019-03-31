import React from 'react'
import Confetti from 'react-dom-confetti';

export default function firework(props) {
    const config = {
        angle: 180,
        spread: "750",
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.1,
        duration: 3000,
        delay: 0,
        width: "26px",
        height: "34px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

 return (
    <Confetti className="absolute pin" active={ props.active } config={ config }/>
  )
}


