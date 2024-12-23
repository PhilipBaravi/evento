import { FC } from "react";
import H1 from "@/components/h1";
import { EventoEvent } from "@/types/event";
import EventsList from "@/components/events-list";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage: FC<EventsPageProps> = async ({ params }) => {
  const { city } = await params;
  const formatedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {formatedCity === "All" ? (
        <H1 className="!mb-28">All Events</H1>
      ) : (
        <H1 className="!mb-28">Events in {city}</H1>
      )}

      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
