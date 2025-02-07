import type { Metadata } from "next";
import { Achievements, OverallStats } from "./Stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Data Scientist currently pursuing a Master's Degree in Data Science & Project Management at HTW",
};

type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => (
  <span className="bg-slate-100 p-1 rounded-sm font-semibold">{children}</span>
);

const About = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif">About Me</h1>
    <p className="my-5 text-neutral-800">
      👋 Hi, I'm <b>Rashmi</b>.
    </p>
    <div className="prose prose-neutral text-neutral-800 space-y-4 mb-8">
    <p>
  I'm a <b>Data & Cloud Professional</b> with a passion for building data-driven applications, automating data pipelines, and leveraging machine learning to create impactful solutions. I hold a <b>Master's Degree in Data Science and Project Management</b> from HTW Berlin, where I specialized in statistics, machine learning, and project execution strategies.
    </p>

      {/* <hr />

      <OverallStats />

      <hr /> */}

    <p>
      My career journey began in <b>law and finance</b>, where I worked as a <b>Compliance Officer</b>. Inspired by my passion for problem-solving with data, I transitioned to the tech industry and have since gained extensive experience in <b>data engineering, analytics, and software development</b>.
    </p>

    <p>
      🏆 I thrive in hackathons and boot camps, where I constantly push the boundaries of innovation. Notable highlights include:
    </p>

    <ul className="list-disc list-inside">
      <li>
        <b>Multiple Hackathon Wins:</b> Impact Hub (2022), Measure of Music (2023), CHEEX (2023)
      </li>
      <li>
        <b>TechLabs Graduate:</b> AI (2023), Data Science (2022)
      </li>
    </ul>

      <p>I particularly enjoy building full stack data driven applications.</p>

      <p>
        <Highlight>🔭 I’m working on:</Highlight> I recently developed <b>here & now</b>, 
        a voice-enabled discovery app that helps users find events, places, and fun activities nearby through interactive chat and TTS.
      </p>

      <p>
        I’m also building scalable data pipelines at Application Engineering Labs, focusing on Terraform, CI/CD, and cloud-native solutions for clients.

      </p>
      <p>
        Additionally, I serve as a mentor at <b>TechLabs</b>, guiding teams on AI and data-driven projects to help them successfully build and deploy real-world applications.
      </p>

      <p>
        <Highlight>🌱 I’m currently learning:</Highlight> Mastering <b>AWS</b> services for deploying machine learning pipelines
      </p>

      <p>
        <Highlight>🤔 What I want to learn next:</Highlight> Autoscaling and orchestration with <b>Kubernetes</b>
      </p>

      <p>
        <Highlight>📫 How to reach me:</Highlight>{" "}
        <a href="mailto:hello@rashmidsouza.com">
          <b>
            <u>hello@rashmidsouza.com</u>
          </b>
        </a>
      </p>
      <p>
        <Highlight>⚡ Fun fact:</Highlight> I've battled Mealybugs to keep my
        houseplants alive.
      </p>
      <p>
        <Highlight>🔧 Tools & Technologies I Work With:</Highlight>
        </p>
        <p>
        <ul className="list-disc list-inside">
        <li>
          <b>Data Solutions:</b> Designing, building, and optimizing data pipelines and workflows
        </li>
        <li>
          <b>Machine Learning & Analytics:</b> Developing models, analyzing data, and generating insights
        </li>
        <li>
          <b>Cloud & Infrastructure:</b> Implementing scalable, cloud-native data solutions
        </li>
        <li>
          <b>Automation & Orchestration:</b> Streamlining processes with automation and workflow orchestration
        </li>
        <li>
          <b>Big Data Processing:</b> Handling large datasets and distributed data processing
        </li>
        <li>
          <b>Visualization & Reporting:</b> Creating data visualizations and reports to support business decisions
        </li>
        </ul>
      </p>

      <p>
        <Highlight>👻 What I do besides hammering keys:</Highlight> I enjoy
        cooking Indo-Chinese cuisine, picnics by the river and watching sci-fi
        movies with my husband.
      </p>
    </div>

    <hr />

    <Achievements />
  </section>
);

export default About;
