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
                    backgroundColor: "rgba(224, 207, 207,0.9)",
                    color:"crimson"
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
                    backgroundColor: "rgba(212,209,205,0.5)",
                    color:"goldenrod"
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
                    backgroundColor: "rgba(69, 94, 76,0.3)",
                    color:"green"
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
                    backgroundColor: "rgba(118, 151, 222,0.6)",
                    color:"blue"
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
