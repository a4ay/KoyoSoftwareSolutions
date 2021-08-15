import React, { useState } from 'react';
import './PopUp.css';
import image from '../../img/commingSoon.png';
/**
 * Component for rendering user post
 */
const CommingSoonPopUp = ({title, setTitle}) => {

  return (
    <>
      <div className='popUpRoot' onClick={()=>{setTitle('')}}>
        <div className='popUpBox'>
            <div style={{margin:'16px auto 50px auto'}}><h1>{title}</h1></div>
            <img className='popUpImg' alt='' src={image}/>
            <div style={{margin:'40px 10% 50px 10%'}}><h4 style={{lineHeight:'30px'}}>{'We are currently working on this feature and will launch soon!'}</h4></div>
        </div>
      </div>
    </>
  );
};

CommingSoonPopUp.propTypes = {
};

export default CommingSoonPopUp;
