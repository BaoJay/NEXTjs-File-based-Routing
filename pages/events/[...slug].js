import { useRouter } from "next/router";

const FilteredPage = () => {
  const router = useRouter();
  //   const someId = router.query["some-id"];
  //   const getData = getStaticProps () =>{}

  let content = (
    <div>
      <h1>Filtered Events Page!</h1>
      <h2>Show Filtered Events here!</h2>
    </div>
  );

  if (router.query.slug) {
    const [eventId, ...restId] = router.query.slug;
    console.log(router.query);
    console.log(eventId);
    console.log(restId);
    content = (
      <div>
        <h1>Filtered Events Page: {restId}</h1>
        <h2>Show Filtered Events here!</h2>
      </div>
    );
    return content;
  }

  return content;
};

export default FilteredPage;
