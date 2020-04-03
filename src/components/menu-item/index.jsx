import React from 'react';
import { withRouter } from 'react-router-dom';
import "./index.scss";

const MenuItem = ({ id, title, imageUrl, size, linkUrl, history, match }) => {
    console.log(match, linkUrl, "match")
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}  ></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='title'>Shop Now</span>
            </div>

        </div>

    )
}

export default withRouter(MenuItem);
