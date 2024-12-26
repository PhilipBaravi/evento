import { FC } from "react";
import Image from "next/image";
import H1 from "@/components/h1";

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage: FC<EventPageProps> = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 600,
      },
    }
  );
  const event = await response.json();
  console.log(event);
  return (
    <main>
      <section className="py-14 md:py-20 relative overflow-hidden flex justify-center items-center">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width:1280px) 100vw, 1280px"
          quality={50}
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-x-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="lg:mt-auto bg-white/20 text-lg capitalize sm:w-full py-2 rounded-md border-white/10 border-2 bg-blur mt-5 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};
const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
};
