import "./order.scss";
import { Order_data } from "../../dummy_data";
const Order = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Order Page</h1>
      <table className="table ">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Number</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Paid</th>
          <th>Status</th>
          <th>Items</th>
          <th>Total</th>
        </tr>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3201</td>
            <td>June 26, 2021</td>
            <td>Jessica Moore</td>
            <td>Yes</td>
            <td>New</td>
            <td>3 items</td>
            <td>$200.00</td>
         </tr>
         <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3202</td>
            <td>June 24, 2022</td>
            <td>Moore</td>
            <td>Yes</td>
            <td>New</td>
            <td>6 items</td>
            <td>$600.00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3203</td>
            <td>June 20, 2019</td>
            <td>Tom</td>
            <td>No</td>
            <td>Old</td>
            <td>6 items</td>
            <td>$800.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3204</td>
            <td>June 29, 2022</td>
            <td>Belly</td>
            <td>Yes</td>
            <td>old</td>
            <td>7 items</td>
            <td>$500.00</td>
            </tr>
            <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3205</td>
            <td>June 22, 2022</td>
            <td>Imran</td>
            <td>No</td>
            <td>Old</td>
            <td>6 items</td>
            <td>$600.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3206</td>
            <td>June 20, 2021</td>
            <td>Masud</td>
            <td>No</td>
            <td>new</td>
            <td>7 items</td>
            <td>$700.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3207</td>
            <td>June 19, 2020</td>
            <td>Tom Cruse</td>
            <td>Yes</td>
            <td>Old</td>
            <td>3 items</td>
            <td>$200.00</td>
        </tr> 
        <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3208</td>
            <td>June 22, 2022</td>
            <td>Ashik alhe</td>
            <td>Yes</td>
            <td>New</td>
            <td>6 items</td>
            <td>$600.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3209</td>
            <td>June 12, 2021</td>
            <td>Rifat</td>
            <td>Yes</td>
            <td>No</td>
            <td>5 items</td>
            <td>$500.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3210</td>
            <td>June 9, 2021</td>
            <td>Jessica </td>
            <td>Yes</td>
            <td>New</td>
            <td>4 items</td>
            <td>$400.00</td>
           </tr>
           <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>#3211</td>
            <td>June 26, 2021</td>
            <td>Jessica Moore</td>
            <td>Yes</td>
            <td>New</td>
            <td>3 items</td>
            <td>$200.00</td>
            </tr>
            {
    Order_data.map((item)=>{
       return(
        <tr>
        <td ><input type="checkbox" /></td>
        <td>{item.number}</td>
        <td>{item.date}</td>
        <td>{item.customer}</td>
        <td>{item.paid}</td>
        <td>{item.status}</td>
        <td>{item.items}</td>
        <td>{item.Total}</td>
        </tr>
       )
    })
}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

// number : "#3201",
//       date : "June 26, 2021",
//       customer : "Jessica Moore",
//       paid : "Yes",
//       status : "New",
//       items : "3 items",
//       Total : "$200.00"
