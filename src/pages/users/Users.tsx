import DataTable from "../../components/dataTable/DataTable";
import {  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from "../../dummy_data";
import './Users.scss';
import { useState } from "react";
// import Add from "../../components/Add/Add";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field:"img",headerName:"Avatar",width:100,
   renderCell: (params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
   }},
   { field:"actions",headerName:"Actions",width:100,
   renderCell: ()=>{
      return <div className="action">
        <div className="view">View</div>
        <div className="delete">Delete</div>
      </div>
   }},
   
   {field:"status",headerName:"Status",width:100,type:"boolean"},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const Users = () => { 
    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status :true},
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];
    const [open,setOpen] = useState(false);
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <Link to="/form">
                    <button onClick={()=>setOpen(true)}>Add New Users</button>
                </Link>
                         
            </div>
            
             <DataTable slug="users" columns={columns} rows={userRows} />
             {/* {open && <Add slug="user" columns={columns} setOpen={setOpen} />} */}
             {open && <Form slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;