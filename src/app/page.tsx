import Link from "next/link";
import Image from "next/image";
import { name, About, Bio, avatar } from "../../lib/info";

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <About />
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500">
          <Link
            href="/projects/pose-genie"
            className="flex items-center gap-2"
          >
            <i className="fa-solid fa-rocket"></i>
            Latest Project: Pose Detection
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/live/BfS71B6Lxfs?feature=share"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-youtube"></i>
            Recent Talk: Winning Measure of Music Hackathon
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rashmi-carol-dsouza"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-github"></i>
            Code
          </a>
          <a
            className="flex items-center gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/1IS8AkTmY1Z1GxdXoKF771m3wzbxOTIsajglC2bPppO4/edit?usp=sharing"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <p className="h-7">Resume</p>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/rashmi_carol"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-twitter"></i>
            Tweets
          </a>
        </div>
      </div>

      <Bio />
    </section>
  );
}
