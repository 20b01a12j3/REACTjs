import React from 'react';
import ReactDOM from 'react-dom';
import dogimg from './BC.jpeg';
import './BC.css';
ReactDOM.render(
    
      <BC/>,
      document.getElementById('root')
);
function BC()
{
  return(
    <div style ={{margin :50,padding :50}}>
       <h1 style ={{color :'blue'}}> BORDER COLLIE </h1>
       <img src = {dogimg} alt = "" />
       <p >The border collie is a working and heirding dog breed.They come from Anglo-Scottish border region and are used toherd livestock.</p>
       <p1>SHARE </p1>
       <p2> LEARN MORE</p2>
    </div>
  );
}

export default BC

