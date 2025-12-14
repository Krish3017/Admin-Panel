import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userRows, usersColumns } from '../../datatablesource';

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
                <DataGrid
                    rows={userRows}
                    columns={usersColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />

            </Paper>
        </div>
    )
}

export default Datatable
