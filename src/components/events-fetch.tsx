import { FC } from "react";
import { EventoEvent } from "@/types/event";
import EventsList from "./events-list";

type EventsFetchProps = {
  city: string;
};

const EventsFetch: FC<EventsFetchProps> = async ({ city }) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 600,
      },
    }
  );
  const events: EventoEvent[] = await response.json();

  // Pass fetched events to EventsList
  return <EventsList city={city} events={events} />;
};

export default EventsFetch;
