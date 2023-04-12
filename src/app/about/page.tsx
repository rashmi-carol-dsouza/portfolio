import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Data Scientist currently pursuing a Master's Degree in Data Science & Project Management at HTW",
};

const About = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif">About Me</h1>
    <p className="my-5 text-neutral-800">
      Hey, I&apos;m Rashmi. Most folks know me as <b>bla bla</b> online.
    </p>
    <div className="prose prose-neutral text-neutral-800 space-y-4">
      <p>
        I&apos;m currently pursuing a{" "}
        <b>Master&apos;s Degree in Data Science & Project Management at HTW</b>,
        where I lead our Developer Relations and Documentation teams. I focus on{" "}
        <b>educating and growing</b> the Vercel and Next.js communities.
      </p>
      <hr />
      <p>
        I&apos;m passionate about many creative pursuits, including music,
        photography, videography, and of course, coding. This combination of
        interests is what ultimately led me to my current role in building
        developer communities.
      </p>
      <p>
        I <b>love</b> building for the web. From something as simple as a single
        HTML file – all the way to large Next.js applications. The web is
        incredible. Anyone can become a developer, writer, or creator – and no
        one has to ask for permission. You can just build.
      </p>
      <p>
        Outside of HTW, I <b>angel invest</b> in developer tools companies and{" "}
        <b>advise early-stage startups</b>. I also do Developer Relations
        consulting work, helping companies take their DevRel function from 0 to
        1, or provide guidance on growing communities, content creation, and
        developer marketing.
      </p>
    </div>
  </section>
);

export default About;
