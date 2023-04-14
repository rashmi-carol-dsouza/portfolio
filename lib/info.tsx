// FIXME: Hardcoded Content
import me from "../src/app/avatar_3x.jpg";
import style from './info.module.css';

export const name = "Rashmi DSouza";
export const avatar = me;

export const About = () => {
  return (
    <div className="my-5 text-neutral-800 max-w-[460px]">
      <p>Hello! I&apos;m Rashmi <span className={style.phonetic}>(ra-sh-mi)</span>, an aspiring Data Scientist, currently pursuing a <b>Master&apos;s in Data Science & Project Management</b> at
        the <a className={style.anchor} href="https://mpmd.htw-berlin.de/" target="_blank">Hochschule für Technik und Wirtschaft</a> Berlin.
      </p>      
      </div>
  );
};

export const Bio = () => {
  return (
    <div className="my-5 max-w-[600px] text-neutral-800">
      <p>I enable businesses to make data driven decisions with my skills in Python, data analysis, Machine Learning and Computer Vision.</p>
    </div>
  );
};
