import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className="title">Total Revenue <MoreVertOutlinedIcon /></h1>
            </div>
            <div className='bottom'>
                <div className="featuredChart">
                    <CircularProgressbar value={70}
                        text="70%"
                        strokeWidth={6}
                        styles={{
                            path: {
                                stroke: "#6fa8dc",
                                strokeLinecap: "round",
                                transition: "stroke-dashoffset 0.6s ease",
                            },
                            trail: {
                                stroke: "#2a2a2a",
                            },
                            text: {
                                fill: "#6fa8dc",
                                fontSize: "22px",
                                fontWeight: 600,
                            },
                        }} />
                </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$420</p>
                <p className='des'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="summary">
                    <div className="itemmm">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="itemmm">
                        <div className="itemTitle">Last week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize='small' />
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="itemmm">
                        <div className="itemTitle">Last month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
