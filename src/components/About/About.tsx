
// FIXME: Hardcoded Content
import style from "./about.module.css";

const About = () => {
    return (
      <div className="my-5 text-neutral-800">
        <p className="max-w-[500px]">
          Hello! I&apos;m Rashmi{" "}
          <span className={style.phonetic}>(ra-sh-mi)</span>, an aspiring Data
          Scientist, currently pursuing a{" "}
          <b>Master&apos;s in Data Science & Project Management</b> at the{" "}
          <a
            className={style.anchor}
            href="https://mpmd.htw-berlin.de/"
            target="_blank"
          >
            Hochschule für Technik und Wirtschaft
          </a>{" "}
          Berlin.
        </p>
      </div>
    );
  };

export default About;