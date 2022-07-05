import { getFeaturedEvents } from "../dummy_data";
import { Fragment } from "react";
import EventList from "../components/events/EventList";

const MainPage = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featureEvents} />
    </Fragment>
  );
};

export default MainPage;
