// FIXME: Hardcoded Content
import me from "../src/app/avatar_3x.jpg";
import style from './info.module.css';

export const name = "Rashmi DSouza";
export const avatar = me;

export const about = () => {
  return (
    <>
      <p>Hello! I&apos;m Rashmi <span className={style.phonetic}>(ra-sh-mi)</span>, an aspiring Data Scientist, currently pursuing a <b>Master&apos;s in Data Science & Project Management</b> at
        the <a className={style.anchor} href="https://mpmd.htw-berlin.de/" target="_blank">Hochschule für Technik und Wirtschaft</a> Berlin.
      </p>      
    </>
  );
};

export const bio = () => {
  return (
    <>
      <p>I enable businesses to make data driven decisions with my skills in Python, data analysis, Machine Learning and Computer Vision.</p>
    </>
  );
};
