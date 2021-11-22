import * as React from "react";
import styles from "./timeslots.module.scss";

const TimeSlots = (props: any) => {
  const handleClick = (timeSlot) => {
    alert(`Your appointment at ${timeSlot} has been booked. Congratulations!`);
  };
  const renderTimeSlots = () => {
    let slots;
    const { timeSlots, selectedDay } = props;
    const availableSlots: string[] = timeSlots[selectedDay]
      ? timeSlots[selectedDay]
      : [];

    if (availableSlots.length > 0) {
      slots = availableSlots.map((timeSlot, i) => (
        <div
          key={i}
          className={styles.slot}
          onClick={() => handleClick(timeSlot)}
        >
          {timeSlot}
        </div>
      ));
    } else {
      slots = <div>No slots available</div>;
    }

    return slots;
  };

  return <div className={styles.timeSlots}>{renderTimeSlots()}</div>;
};

export default TimeSlots;
