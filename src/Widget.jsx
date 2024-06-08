import React from 'react'
import './Widget.css'
import InfoIcon from './@mui/icons-material/Info';
import FiberManualRecordIcon from './@mui/icons-material/FiberManualRecord';
const Widget = () => {
    const article = (heading,subtitle) => (
        <div className="article">
            <div className="article-left">
                <FiberManualRecordIcon/>
            </div>
            <div className="article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widget'>
     <div className="widget-headers">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
     </div>
     {article("LinkedIn is back","LinkedIn is back with a new design")}
     {article("LinkedIn is back","LinkedIn is back with a new design")}
     {article("LinkedIn is back","LinkedIn is back with a new design")}
     {article("LinkedIn is back","LinkedIn is back with a new design")}

    </div>
  )
}

export default Widget