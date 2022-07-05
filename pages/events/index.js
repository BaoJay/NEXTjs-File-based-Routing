import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { Fragment } from "react";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  console.log(allEvents);
  return (
    <Fragment>
      <EventSearch />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;
