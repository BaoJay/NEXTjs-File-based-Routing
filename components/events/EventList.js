import classes from "./EventList.module.css";

import EventItem from "./EventItem";

const EventList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
