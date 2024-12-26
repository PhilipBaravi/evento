import { FC, Suspense } from "react";
import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import EventsFetch from "@/components/events-fetch";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage: FC<EventsPageProps> = async ({ params }) => {
  const { city } = await params;

  const formatedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {formatedCity === "All" ? (
        <H1 className="!mb-28">All Events</H1>
      ) : (
        <H1 className="!mb-28">Events in {city}</H1>
      )}
      <Suspense fallback={<Loading />}>
        <EventsFetch city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
