import React from 'react';
import './menu-item.scss';

const MenuItem =({title,id,imageUrl})=>(
    <div className="menu-items">
        <div className="back-image"
        style={
        {
            backgroundImage:`url(${imageUrl})`
        }
              } />
        <div className="content">
<h1 className="title" key={id}>{title.toUpperCase()}</h1>
            <span className="sub-title">Shop Now..!</span>
        </div>
    </div>
) 

export default MenuItem;