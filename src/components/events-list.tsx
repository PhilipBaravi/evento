import { FC } from "react";
import { EventoEvent } from "@/types/event";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventoEvent[];
};

const EventsList: FC<EventsListProps> = ({ events }) => {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
