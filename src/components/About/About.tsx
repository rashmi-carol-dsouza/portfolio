// FIXME: Hardcoded Content
import style from "./about.module.css";

const About = () => {
    return (
        <div className="my-5 text-neutral-800">
            <p className="max-w-[500px]">
                Hello! I&apos;m Rashmi{" "}
                <span className={style.phonetic}>(ra-sh-mi)</span>, a Data
                Professional, with a{" "}
                <b>Master&apos;s in Data Science & Project Management</b> from{" "}
                <a
                    className={style.anchor}
                    href="https://mpmd.htw-berlin.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hochschule für Technik und Wirtschaft
                </a>{" "}
                Berlin. Currently, I&apos;m working at{" "}
                <b>Siemens Mobility</b>, where I leverage data to solve complex
                mobility challenges and enhance transportation solutions.
            </p>
        </div>
    );
};

export default About;
