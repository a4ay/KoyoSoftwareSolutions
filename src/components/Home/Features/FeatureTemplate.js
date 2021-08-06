import React from 'react';
import {Link} from 'react-router-dom'
const FeatureTemplate = (props) => {
    const {classDiv, icon, title, description,link} = props.data
    const classAdd = "icon-box mt-5 mt-lg-0 " + classDiv
    const iconAdd = "bx " + icon
    const image=props.image;
    return (
        <div className={classAdd} data-aos="zoom-in" data-aos-delay="150">
            <div className="center-heading">
                <h2>{title}</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={image} />
                </div>
                <div className="col-md-6">
                    <p>{description}<Link to={link}> Read More. . .</Link></p>
                </div>
            </div>
        </div>
    );
}

export default FeatureTemplate;
