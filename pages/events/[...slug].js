import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy_data";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredPage = () => {
  const router = useRouter();
  //   const someId = router.query["some-id"];
  //   const getData = getStaticProps () =>{}

  // Encounter the first time page is rendered
  if (!router.query.slug) {
    return <p className="center">Loading....</p>;
  } else if (router.query.slug.length > 2) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Nothing was found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const [year, month, ...restId] = router.query.slug;
  console.log(router.query.slug.length);

  const selectedDate = {
    year,
    month,
  };

  console.log(selectedDate);

  const filteredData = getFilteredEvents(selectedDate);
  console.log(filteredData);

  const date = new Date(year, month - 1);

  if (!filteredData || filteredData.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No event was matched for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredData} />
      </Fragment>
    );
  }
};

export default FilteredPage;
