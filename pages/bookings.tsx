import { useState } from "react";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Badge from "@mui/material/Badge";
import PickersDay from "@mui/lab/PickersDay";
import { TextFieldProps } from "@mui/material";
import moment from "moment";
import TimeSlots from "Components/timeSlots";
import styles from 'Styles/Bookings.module.scss';

const data = {
  name: "Christy Schumm",
  available: true,
  timeZone: "(GMT-06:00) America/North_Dakota/New_Salem",
  daysAvailable: ["11/25/2021", "11/30/2021", "11/28/2021", "11/27/2021"],
  timeSlots: {
    "11/25/2021": ["9:00", "9:30", "10:00", "10:30"],
    "11/30/2021": ["7:00", "7:30", "11:00", "11:30"],
    "11/28/2021": ["8:00", "8:30", "13:00", "13:30, 14:00", "14:30", "15:00", "15:30"],
    "11/27/2021": ["6:00", "6:30", "13:00"]
  }
};

const Booking = () => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (selectedDay: Date) => {
    const formatedDay = moment(selectedDay).format("L");
    setValue(formatedDay);
    console.log("This is the new value: ", formatedDay);
  };
  const renderDay = (day: Date, _value: Date[], DayComponentProps: any) => {
    const formatedDay = moment(day).format("L");
    const { daysAvailable } = data;
    const isSelected =
      formatedDay ===
      daysAvailable.find((items) => moment(items).format("L") === formatedDay);

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? "🟢" : undefined}
      >
        <PickersDay {...DayComponentProps} />
      </Badge>
    );
  };
  const renderInput = (params: TextFieldProps) => <TextField color="primary" {...params} />;

  return (
    <div className={styles.appointmentContainer}>
      <DatePicker
        label="Book Appointment"
        value={value}
        disablePast
        renderDay={renderDay}
        onChange={handleChange}
        renderInput={renderInput}
      />
      {value && <TimeSlots selectedDay={value} timeSlots={data.timeSlots} />}
    </div>
  );
};

export default Booking;
