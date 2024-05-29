import React, { useEffect, useState } from 'react'

const EventListner = () => {

    
    const [screenSize, setScreenSize] = useState ({
        width : window.innerWidth,
        height: window.innerHeight
    });
    const updateScreenSize = () => {
        setScreenSize( {
            width : window.innerWidth,
            height : window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return() => {
            window.removeEventListener('resize', updateScreenSize);
        }
    }, []);

  return (
    <div>EventListner Screen Size Example <br/>
        <p>Width : {screenSize.width}</p>
        <p>Height : {screenSize.height}</p>
    </div>
  )
}

export default EventListner