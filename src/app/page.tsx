import Link from "next/link";
import Image from "next/image";
import avatar from "./avatar_3x.jpg";
import About from '../components/About/About';
import Bio from '../components/Bio';

const name = "Rashmi DSouza";

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
            href="https://hypowise.de/"
            className="flex items-center gap-2"
          >
            <i className="fa-solid fa-rocket h-4 w-4"></i>
            Latest Project: hypowise.de
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtu.be/0gpuX0jPP1s"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-youtube h-4 w-4"></i>
            Recent Talk: Flask Workshop at Techlabs Berlin
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rashmi-carol-dsouza"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-github h-4 w-4"></i>
            Code
          </a>
          <a
            className="flex items-center gap-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/1IS8AkTmY1Z1GxdXoKF771m3wzbxOTIsajglC2bPppO4/edit?usp=sharing"
          >
            <i className="fa-solid fa-arrow-up-right-from-square h-4 w-4"></i>
            <p className="h-7">Resume</p>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rashmi-carol-dsouza/"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-linkedin-in h-4 w-4"></i>
            LinkedIn
          </a>
        </div>
      </div>

      <Bio />
    </section>
  );
}
