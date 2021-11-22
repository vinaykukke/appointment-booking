import * as React from "react";
import Link from "next/link";
import styles from "./displaycard.module.scss";

const DisplayCard = (props: any) => {
  const { doctor, href } = props;
  const isUnavailable = !doctor.available;

  return (
    <div className={styles.cardContainer}>
      {isUnavailable && <div className={styles.disable} />}
      <span className={styles.pro}>
        {isUnavailable ? "Unavaible" : "Available"}
      </span>
      <img className={styles.round} src={doctor.image} alt="user" />
      <h3>{doctor.name}</h3>
      <h6>{doctor.timeZone}</h6>
      <p>
        User interface designer and <br /> front-end developer
      </p>
      {href && (
        <Link href={href}>
          <button className={styles.primary}>Book Appointment</button>
        </Link>
      )}
    </div>
  );
};

export default DisplayCard;
