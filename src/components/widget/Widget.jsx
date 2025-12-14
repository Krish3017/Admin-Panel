import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({ type }) => {

    let data

    const amount = 150
    const diff=10

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (<PersonOutlineIcon className='icon' style={{
                    backgroundColor: "#FEE2E2",
                    color:"#DC2626"
                }
                } />)
            }
            break
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: (<ShoppingCartIcon className='icon' style={{
                    backgroundColor: "#FEF3C7",
                    color:"#D97706"
                }
                } />)
            }
            break
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (<MonetizationOnIcon className='icon' style={{
                    backgroundColor: "#DCFCE7",
                    color:"#16A34A"
                }
                } />)
            }
            break
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (<AccountBalanceOutlinedIcon className='icon' style={{
                    backgroundColor: "#DBEAFE",
                    color:"#2563EB"
                }
                }/>)
            }
            break
        default:
            break
    }
    return (
        <div className='Widget'>
            <div className='left'>
                <span className="title">{ data.title}</span>
                <span className="counter">{data.isMoney && "$"}{ amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className='right'>
                <div className="percentage positive">{diff}%<KeyboardArrowUpIcon /></div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
