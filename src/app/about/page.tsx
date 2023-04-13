import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Data Scientist currently pursuing a Master's Degree in Data Science & Project Management at HTW",
};

const About = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif">About Me</h1>
    <p className="my-5 text-neutral-800">
    👋 Hi, I'm <b>Rashmi</b>.
    </p>
    <div className="prose prose-neutral text-neutral-800 space-y-4">
      <p>
      I'm a student at HTW Berlin pursuing my <b>Master's Degree in Data Science and Project Management</b>.
      </p>
      <hr />
      <p>
      Previously I worked as a Compliance Officer and studied law and finance/commerce. Now I'm switching my carrer and to become a <b>Data Scientist</b>.
      </p>
      <p>
      I particularly enjoy building full stack data driven applications.
      </p>
      <p>
      🔭 I’m working on: Building an image recognition app to indentify hand written numbers. The last app I worked, detects Baklava in an image.
      </p>
      <p>
      🌱 I’m currently learning: Neural Networks using keras, Tensorflow and Pytorch.
      </p>
      <p>
        🤔 What I want to learn next: AWS to deploy machine learning pipelines.
        </p>
      <p>
        📫 How to reach me: <b>hello@rashmidsouza.com</b>
        </p>
      <p>
        ⚡ Fun fact: I've battled Mealybugs to keep my houseplants alive.
        </p>
      <p>🔧 Tools I Like To Use
      <ul>
        <li>Scikit-learn</li>
        <li>Tableau</li>
        <li>Tensorflow</li>
      </ul>

        </p>

      <p>
        👻 What I do besides hammering keys: I enjoy cooking Indo-Chinese cuisine, picnics by the river and watching sci-fi movies with my husband.
      </p>
      
      
    </div>
  </section>
);

export default About;
