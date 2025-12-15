import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../siddebar/Sidebar'
import './systemhealth.scss'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";


const Systemhealth = () => {
    return (
        <div className='SystemHealth'>
            <Sidebar />
            <div className="systemContainer">
                <Navbar />
                <h1 className="pageTitle">System Health</h1>

                {/* STATUS CARDS */}
                <div className="statusGrid">
                    <div className="statusCard healthy">
                        <CheckCircleOutlineIcon />
                        <div>
                            <h3>Server Status</h3>
                            <p>Operational</p>
                        </div>
                    </div>

                    <div className="statusCard warning">
                        <WarningAmberOutlinedIcon />
                        <div>
                            <h3>API Latency</h3>
                            <p>320 ms (High)</p>
                        </div>
                    </div>

                    <div className="statusCard healthy">
                        <CheckCircleOutlineIcon />
                        <div>
                            <h3>Database</h3>
                            <p>Connected</p>
                        </div>
                    </div>

                    <div className="statusCard error">
                        <ErrorOutlineOutlinedIcon />
                        <div>
                            <h3>Error Rate</h3>
                            <p>2.4%</p>
                        </div>
                    </div>
                </div>

                {/* METRICS */}
                <div className="metrics">
                    <div className="metric">
                        <span>CPU Usage</span>
                        <strong>48%</strong>
                    </div>
                    <div className="metric">
                        <span>Memory Usage</span>
                        <strong>62%</strong>
                    </div>
                    <div className="metric">
                        <span>Disk Space</span>
                        <strong>71%</strong>
                    </div>
                    <div className="metric">
                        <span>Uptime</span>
                        <strong>12 days</strong>
                    </div>
                </div>

                {/* LOGS */}
                <div className="logs">
                    <h2>Recent System Logs</h2>
                    <ul>
                        <li className="success"><CheckCircleOutlineIcon /> Server restarted successfully</li>
                        <li className="warning"><WarningAmberOutlinedIcon /> API response delay detected</li>
                        <li className="success"><CheckCircleOutlineIcon /> Database backup completed</li>
                        <li className="error"><ErrorOutlineOutlinedIcon /> Payment service timeout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Systemhealth
