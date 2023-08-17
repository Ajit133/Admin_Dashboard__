import "./pieChartBox.scss";
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip } from "recharts";
import {data} from '../../dummy_data';

const PieChartBox = () => {
  return (
    <><div className="pieChartBox">
    <h1>Leads By Source</h1>
    <div className="chart">
    <ResponsiveContainer width="99%" height={300}>
      <PieChart>
          <Tooltip contentStyle={{background:"white",borderRadius:"5px"}} />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value">
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
  <div className="options">
    {data.map((item)=>(
        <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>       
        </div>
    ))}
  </div>
  </div>
    </>
  );
};

export default PieChartBox;
