import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Loading from "@/components/Loading";
import { Suspense } from 'react';

export default function Home({searchParams: {query}}) {
  // passing the query from the URL to the EventList component. Only show the matching events if any query is provided.
  // suspence e key deya hoyeche, karon query change hle, database e request kore events niye asbe. Tahole, page er data o change hobe. 

  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query}/>
      </Suspense>
    </section>
  );
}


  // R Tapas da bollo j Suspence closeest boudary te deya valo. mane, ekhane jemon events load hobe, time nibe sejonno take wrap korbe suspence. Ebong e tuk e. page we header, footer k suspence diye wrap korar kono mane nai. etai r ki. closest boundary e wrap korbe.