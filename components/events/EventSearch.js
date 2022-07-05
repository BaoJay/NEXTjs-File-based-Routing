import classes from "./EventSearch.module.css";
import Button from "../ui/Button";

import { useRef } from "react";
import { useRouter } from "next/router";

const EventSearch = () => {
  const yearData = useRef();
  const monthData = useRef();
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    const year = yearData.current.value;
    const month = monthData.current.value;
    router.push(`/events/${year}/${month}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearData}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthData}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      {/* <Button link={`/events/${year}/${month}`}>Find Events</Button> */}
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
