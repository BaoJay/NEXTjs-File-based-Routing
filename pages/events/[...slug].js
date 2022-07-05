import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy_data";

const FilteredPage = () => {
  const router = useRouter();
  //   const someId = router.query["some-id"];
  //   const getData = getStaticProps () =>{}

  if (!router.query.slug || router.query.slug.length > 2) {
    return <p>Nothing was found!</p>;
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

  if (filteredData.length === 0) {
    return (
      <Fragment>
        <h3>No event was matched!</h3>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <EventList items={filteredData} />
        {/* <h2>Hello Temporary!</h2> */}
      </Fragment>
    );
  }
};

export default FilteredPage;
