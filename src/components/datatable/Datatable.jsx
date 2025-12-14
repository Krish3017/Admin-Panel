import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { userRows, usersColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='view'>View</div>
                    <div className="delete">Delete</div>
                </div>
            )
        }
    }]

    return (
        <div>
            <Paper sx={{ height: 590, width: '100%' }} className='datatable'>
                <div className='add'>
                    <div className='newUser'>Add New User</div>
                    <div className='addUser'><Link to="/users/new"><PersonAddAltIcon className='icon' />Add</Link></div>
                </div>

                <DataGrid className='dataGrid'
                    rows={userRows}
                    columns={usersColumns.concat(actionColumn)}
                    pageSize={7}
                    pageSizeOptions={[7]}
                    checkboxSelection
                />

            </Paper>
        </div>
    )
}

export default Datatable
