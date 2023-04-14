import talks from "./talks.json";
import clsx from "clsx";

const Talks = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif mb-5">Recent Talks</h1>
    <ol>
      {talks.map((talk) => (
        <li key={talk.href}>
          <div className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col">
              <a
                href={talk.href}
                target="_blank"
                className="underline hover:no-underline"
              >
                {talk.title}
              </a>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {talk.summary}
              </p>
              <iframe
                className="mt-3 video"
                src={talk.embeddedVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Talks;
