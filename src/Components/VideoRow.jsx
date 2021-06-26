import React from 'react'
import './VideoRow.css'

const VideoRow = ({views,subs,description,timestamp,channel,title,image}) => {
    return (
        <div className='videoRow'>
            <img src ={image} alt=''/>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className='headline'>
                    {channel} • <span className='span'><span className='subs'>{subs}</span> Subscribers </span> {views} views • {timestamp}
                </p>
                <p className='videoRow_desc'>{description} </p>
            </div>
            
        </div>
    )
}

export default VideoRow
