import React from 'react'
import './orderTable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const OrderTable = () => {
   const orders = [
    {
      id: 101,
      product: "Wireless Headphones",
      img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
      customer: "Riya Sharma",
      date: "2025-01-12",
      amount: 2499,
      method: "UPI",
      status: "Approved",
    },
    {
      id: 102,
      product: "Smart Watch",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      customer: "Neha Verma",
      date: "2025-01-15",
      amount: 3999,
      method: "Credit Card",
      status: "Approved",
    },
    {
      id: 103,
      product: "Bluetooth Speaker",
      img: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      customer: "Rahul Mehta",
      date: "2025-01-18",
      amount: 1799,
      method: "Debit Card",
      status: "Pending",
    },
    {
      id: 104,
      product: "Laptop Stand",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      customer: "Priya Singh",
      date: "2025-01-20",
      amount: 999,
      method: "Cash on Delivery",
      status: "Rejected",
    },
    {
      id: 105,
      product: "USB-C Hub",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      customer: "Karan Patel",
      date: "2025-01-22",
      amount: 1299,
      method: "Net Banking",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className='OrderTable'>
      <Table sx={{ minWidth: 650 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Profile</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell' align="right">Amount (₹)</TableCell>
            <TableCell className='tableCell'>Payment</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>{row.product}</TableCell>
              <TableCell className='tableCell'>
                <img
                  src={row.img}
                  alt={row.product}
                  style={{
                    width: 35,
                    height: 35,
                    objectFit: "cover",
                    borderRadius: 20,
                  }}
                />
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell' align="right">{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell' sx={{ fontWeight: 600 }}>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable
