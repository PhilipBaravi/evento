import { FC } from "react";
import H1 from "@/components/h1";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage: FC<EventsPageProps> = ({ params }) => {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {city === "All" ? <H1>All Events</H1> : <H1>Events in {city}</H1>}
    </main>
  );
};

export default EventsPage;
