import "./calender.scss";
import { Link } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calender = () => {
  return (
    <div className="calender">
      <div className="flex justify-end gap-1">
        <div>
          <Link to="/">
            <span className="">Apps</span>
          </Link>
        </div>
        <span>/</span>
        <div>
          <Link to="/calendar">
            <span>Default Calender</span>
          </Link>
        </div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
