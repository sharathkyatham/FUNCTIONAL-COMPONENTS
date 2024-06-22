import React from 'react'

function Player(props) {
  return (
    
    <div className='sennimage'><img className='IE'src={props.pic}></img>
       <u><h2>{props.name}</h2></u> 
       <h3>{props.senname}</h3>
       <marquee scrollamount='5' direction='right' loop='5' behaviour='alternate'><h4>{props.senprice}</h4></marquee>
  </div>
  
  );
}

export default Player 