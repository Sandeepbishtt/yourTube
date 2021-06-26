import React from 'react'
import './SidebarRow.css'


const SidebarRow = ({selected,Icon,title}) => {
    return (
        <div className={`sidebar_row ${selected && 'selected'}`}>
            <Icon className= "sidebar_icon" />
           <h2 className="sidebar_title"> {title}</h2>
        </div>
    )
}

export default SidebarRow
