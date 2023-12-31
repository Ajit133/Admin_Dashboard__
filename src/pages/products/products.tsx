import { useState } from 'react';
import DataTable from '../../components/dataTable/DataTable';
import './products.scss';
import {Link} from "react-router-dom";
import { products } from '../../dummy_data';
import { GridColDef } from "@mui/x-data-grid";
// import Add from '../../components/Add/Add';
// import FormSection from '../Form Section/FormSection';
import UserProductsForm from '../../components/ProductsForm/UserProductsForm';

// add condition of data Columns 
const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];
const Products = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <Link to="/userproductform">
                <button onClick={()=>setOpen(true)}>Add New Products</button>
                </Link>
            </div>

            <DataTable slug='products' columns={columns} rows={products}/>
            {/* {open && <Add slug='product' columns={columns} setOpen={setOpen}/>} */}
            {open && <UserProductsForm /> }
        </div>
    );
};

export default Products;
// img,title,color,price,producer,CreateAt,instock