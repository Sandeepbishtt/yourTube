import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
            <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
            image='https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s88-c-k-c0x00ffffff-no-rj'
            channel='freecodecamp'
            verified
            subs='25.5M'
            noOfVideos={458}
            description='Learn to code for free.'
            />
            <hr/>
        <VideoRow
        views='250k'
        subs='12M'
        description='Free Coding'
        timestamp='25 days ago'
        channel='sandeep code'
        title='Learn with Me'
        image='https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
        />

        </div>
    )
}

export default SearchPage

