import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withRouter } from '../../withRouter/withRouter';
import "./menu-item.styles.scss"


const MenuItem = ({ title, imageUrl, size, linkUrl,  match }) => {
    const history = useNavigate()
    return <div onClick={() => history(`${linkUrl}`)}
        className={`${size} menu-item`}>
        <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} ></div>
        <div className="content">
            <h1 className="title">{ title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
};

export default withRouter(MenuItem);
