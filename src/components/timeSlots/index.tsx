import * as React from "react";
import styles from './timeslots.module.scss';

const TimeSlots = (props: any) => {
  const renderTimeSlots = () => {
    const { timeSlots, selectedDay } = props;
    const availableSlots: string[] = timeSlots[selectedDay];
    return availableSlots.map((timeSlot, i) => <div key={i} className={styles.slot}>{timeSlot}</div>);
  };

  return <div className={styles.timeSlots}>{renderTimeSlots()}</div>;
}

export default TimeSlots;