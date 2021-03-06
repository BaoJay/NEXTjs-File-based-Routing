import classes from "./EventItem.module.css";

import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  // Convert to readable date
  const dateReadable = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Convert the location
  const formattedLocation = location.replace(", ", "\n");

  // Navigate the link
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{dateReadable}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
