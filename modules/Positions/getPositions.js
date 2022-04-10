const getPositions = () =>{

    const leftBowPosition = 0.85*(innerWidth/4);
    const midBowPosition = 2*(innerWidth/4);
    const rightBowPosition = 3*(innerWidth/4);
    
    const leftFirePosition = 0.85*(innerWidth/4) +(innerWidth/96);
    const midFirePosition = 2*(innerWidth/4) + (innerWidth/96);
    const rightFirePosition = 3*(innerWidth/4) +  (innerWidth/96);
        
    const playerLeftPosition = 0.85*(innerWidth/4);
    const playerMidPosition = 2*(innerWidth/4);
    const playerRightPosition = 3*(innerWidth/4);
  
    return { leftBowPosition, midBowPosition, rightBowPosition, 
             leftFirePosition, midFirePosition, rightFirePosition, 
             playerLeftPosition, playerMidPosition, playerRightPosition
           };
  
  }

export default getPositions;