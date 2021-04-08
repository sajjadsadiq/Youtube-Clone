import React from 'react';
import './SideBarRow.css'

const SideBarRow = ({ Icon, Title }) => {
    return (
        <div className="SideBarRow">
            <div className="mainContent">
                <div className="icon">
                    <Icon />
                </div>
                <div className="title">
                    <h4>{Title}</h4>
                </div>
            </div>
        </div>
    );
};

export default SideBarRow;