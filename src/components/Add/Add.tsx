import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import Form from '../Form/Form';

type Props = {
    slug:string,
    columns:GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props:Props) => {
    return (
        <div className="add">
             <div className="model">
                <div className="close" onClick={()=>props.setOpen(false)}>X</div>
                <h1>Add New {props.slug}</h1>
                <form>
                    {props.columns.filter(item=>item.field !== "id" && item.field !== "img")
                    .map(column=>(
                        <div className="item">
                            <label >{column.headerName}</label>
                            <input type={column.type} placeholder={column.field}/>
                        </div>
                    ))}
                    <button className='button'>Send</button>
                </form>
                
             </div>
        </div>
    );
};

export default Add;