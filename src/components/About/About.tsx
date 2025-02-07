// FIXME: Hardcoded Content
import style from "./about.module.css";

const About = () => {
    return (
    <div className="my-5 text-neutral-800">
        <p className="max-w-[500px]">
            Hello! I&apos;m Rashmi{" "}
            <span className={style.phonetic}>(ra-sh-mi)</span>, a <b>Data & Cloud Professional</b> with a{" "}
            <b>Master&apos;s in Data Science & Project Management</b> from{" "}
            <a
            className={style.anchor}
            href="https://mpmd.htw-berlin.de/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Hochschule für Technik und Wirtschaft
            </a>{" "}
            Berlin. I specialize in building data-driven applications, automating pipelines, and leveraging machine learning to create impactful solutions. Currently, I&apos;m working on various scalable data projects at{" "}
            <b>Application Engineering Labs</b>, focusing on Terraform, CI/CD, and cloud-native technologies.
        </p>

        <p className="max-w-[500px]">
            I also serve as a mentor at <b>TechLabs</b>, where I guide teams in developing data-driven projects involving machine learning, analytics, and cloud solutions.
        </p>
    </div>
    );
};

export default About;
