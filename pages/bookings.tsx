import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Badge from "@mui/material/Badge";
import PickersDay from "@mui/lab/PickersDay";
import { TextFieldProps } from "@mui/material";
import moment from "moment";
import TimeSlots from "Components/timeSlots";
import DisplayCard from "Components/displayCard";
import { IHomeProps } from "Types/home";
import styles from "Styles/Bookings.module.scss";

type TBookingProps = IHomeProps & NextRouter;

const Booking = (props: TBookingProps) => {
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (selectedDay: Date) => {
    const formatedDay = moment(selectedDay).format("L");
    setValue(formatedDay);
  };
  const doctor = props.doctors.find((doc) => doc.name === router.query.name);
  const renderDay = (day: Date, _value: Date[], DayComponentProps: any) => {
    const formatedDay = moment(day).format("L");
    const { daysAvailable } = doctor;
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
  const renderInput = (params: TextFieldProps) => (
    <TextField color="primary" {...params} />
  );

  return (
    <div className={styles.appointmentContainer}>
      {doctor && <DisplayCard doctor={doctor} />}
      <DatePicker
        label="Book Appointment"
        value={value}
        disablePast
        renderDay={renderDay}
        onChange={handleChange}
        renderInput={renderInput}
      />
      {value && <TimeSlots selectedDay={value} timeSlots={doctor.timeSlots} />}
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/doctors");
  const doctors = await res.json();

  return {
    props: {
      doctors,
    },
  };
}

export default Booking;
