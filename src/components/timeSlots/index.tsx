import * as React from "react";
import styles from "./timeslots.module.scss";

const TimeSlots = (props: any) => {
  const { timeSlots, selectedDay } = props;
  const availableSlots: string[] = timeSlots[selectedDay]
    ? timeSlots[selectedDay]
    : [];

  const handleClick = (timeSlot) => () => {
    alert(
      `Your appointment on ${selectedDay} at ${timeSlot} has been booked. Congratulations!`
    );
  };

  const renderTimeSlots = () => {
    let slots;

    if (availableSlots.length > 0) {
      slots = availableSlots.map((timeSlot, i) => (
        <div
          key={i}
          className={styles.slot}
          onClick={handleClick(timeSlot)}
        >
          {timeSlot}
        </div>
      ));
    } else {
      slots = <div>No slots available</div>;
    }

    return slots;
  };

  return (
    <div className={styles.timeSlotsContainer}>
      {availableSlots.length > 0 && (
        <div>Click on a time slot to make a reservation</div>
      )}
      <div className={styles.timeSlots}>{renderTimeSlots()}</div>
    </div>
  );
};

export default TimeSlots;
