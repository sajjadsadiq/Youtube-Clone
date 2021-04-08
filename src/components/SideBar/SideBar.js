import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import './SideBar.css'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBar = () => {
    return (
        <div className="SideBar">
            <SideBarRow Icon={HomeIcon} Title="Home" />
            <SideBarRow Icon={ExploreIcon} Title="Explore" />
            <SideBarRow Icon={SubscriptionsIcon} Title="Subscriptions" />

            <hr/>
            <SideBarRow Icon={VideoLibraryIcon} Title="Library" />
            <SideBarRow Icon={HistoryIcon} Title="History" />
            <SideBarRow Icon={OndemandVideoIcon} Title="Your Video" />
            <SideBarRow Icon={WatchLaterIcon} Title="Watch Later" />
            <SideBarRow Icon={ThumbUpIcon} Title="Live Videos" />
            <SideBarRow Icon={ExpandMoreIcon} Title="Show More" />

            <hr/>

        </div>
    );
};

export default SideBar;