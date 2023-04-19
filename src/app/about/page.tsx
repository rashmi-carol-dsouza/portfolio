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
        I'm a student at HTW Berlin pursuing my{" "}
        <b>Master's Degree in Data Science and Project Management</b>.
      </p>

      <hr />

      <OverallStats />

      <hr />

      <p>
        Previously I worked as a Compliance Officer and studied law and
        finance/commerce. Now I'm switching my carrer and to become a{" "}
        <b>Data Scientist</b>.
      </p>

      <p>I particularly enjoy building full stack data driven applications.</p>

      <p>
        <Highlight>🔭 I’m working on:</Highlight> Building an image recognition
        app to indentify hand written numbers. The last app I worked, detects
        Baklava in an image.
      </p>

      <p>
        <Highlight>🌱 I’m currently learning:</Highlight> Neural Networks using
        keras, Tensorflow and Pytorch.
      </p>

      <p>
        <Highlight>🤔 What I want to learn next:</Highlight> AWS to deploy
        machine learning pipelines.
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
        <Highlight>🔧 Tools I Like To use:</Highlight>
        <ul className="list-disc list-inside">
          <li>Scikit-learn</li>
          <li>Tableau</li>
          <li>Tensorflow</li>
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
