import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Widget = ({ type }) => {

    let data

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                amount: 1284,
                isMoney: false,
                link: "See all users",
                icon: (<PersonOutlineIcon className='icon' style={{
                    backgroundColor: "#FEE2E2",
                    color: "#DC2626"
                }
                } />),
                diff: 6.2
            }
            break
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                amount: 436,
                link: "See all orders",
                icon: (<ShoppingCartIcon className='icon' style={{
                    backgroundColor: "#FEF3C7",
                    color: "#D97706"
                }
                } />),
                diff: 3.8
            }
            break
        case "earning":
            data = {
                title: "EARNINGS",
                amount: 18742.60,
                isMoney: true,
                link: "View net earnings",
                icon: (<MonetizationOnIcon className='icon' style={{
                    backgroundColor: "#DCFCE7",
                    color: "#16A34A"
                }
                } />),
                diff: 9.4
            }
            break
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                amount: 6380.25,
                link: "See details",
                icon: (<AccountBalanceOutlinedIcon className='icon' style={{
                    backgroundColor: "#DBEAFE",
                    color: "#2563EB"
                }
                } />),
                diff: -2.1
            }
            break
        default:
            break
    }
    return (
        <div className='Widget'>
            <div className='left'>
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{data.amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className='right'>
                <div className={`percentage ${data.diff >= 0 ? "positive" : "negative"}`}>
                    {Math.abs(data.diff)}%
                    {data.diff >= 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
