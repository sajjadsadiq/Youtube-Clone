import { Avatar } from '@material-ui/core';
import React from 'react';
import './Video.css'

const Video = ({title, image, channle, channleImage, timesamp, view}) => {
    return (
        <div className="video">
            <img src={image} alt="" className="videoThumble"/>
            <div className="videoCardInfo">
                <Avatar src={channleImage} className="avatar"/>
                <div className="videoinfo">
                    <h4>{title}</h4>
                    <p>{channle}</p>
                    <p>{view} . {timesamp}</p>
                </div>
            </div>
        </div>
    );
};

export default Video;