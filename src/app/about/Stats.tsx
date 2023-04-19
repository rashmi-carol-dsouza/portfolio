"use client";

import Image from "next/image";
import CountUp from "react-countup";
import achievements from "./achievements.json";
import stats from "./stats.json";

const badges: AchievementProps[] = achievements.filter(
  (achievement) => achievement.type === "badge"
);
const hackathons = achievements.filter(
  (achievement) => achievement.type === "hackathon"
);

type SocialMentionProps = {
  src: string;
  url: string;
  text: string;
};

type AchievementProps = {
  imageUrl: string;
  title: string;
  description: string;
  issuedBy: string;
  issuerUrl: string;
  lessonsLearned?: string;
  socialMentions?: SocialMentionProps[];
  rank?: number;
  width: number;
  height: number;
  linkImage?: boolean;
};

const Achievement = ({
  imageUrl,
  title,
  description,
  issuedBy,
  issuerUrl,
  width,
  height,
  linkImage,
}: AchievementProps) => (
  <div className="text-center">
    {linkImage ? (
      <a href={imageUrl} target="_blank">
        <Image
          alt={description}
          src={imageUrl}
          width={width}
          height={height}
          priority
          className="my-0 mx-auto"
        />
      </a>
    ) : (
      <Image
        alt={description}
        src={imageUrl}
        width={width}
        height={height}
        priority
        className="my-0 mx-auto"
      />
    )}
    <div className="mt-2">
      <p className="text-xs">
        <span className="block">{title}</span>
        <a href={issuerUrl} target="_blank">
          {issuedBy}
        </a>
      </p>
    </div>
  </div>
);

type AchievementsList = {
  achievements: AchievementProps[];
  title: string;
};

const AchievementsList = ({ achievements, title }: AchievementsList) => (
  <div>
    <h3 className="mb-5">{title}</h3>
    <ul className="grid grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <li key={achievement.title}>
          <Achievement {...achievement} />
        </li>
      ))}
    </ul>
  </div>
);

export const Achievements = () => {
  return (
    <div className="my-8 text-neutral-800">
      <h2>Achievements</h2>
      <div className="space-y-10">
        <AchievementsList achievements={badges} title="Badges" />
        <AchievementsList achievements={hackathons} title="Hackathons" />
      </div>
    </div>
  );
};

type StatProps = {
  label: string;
  number: number;
  duration: number;
};
const Stat = ({ label, number, duration }: StatProps) => (
  <div className="text-center">
    <CountUp
      end={number}
      duration={duration}
      start={0}
      className="text-xl font-bold"
    />
    <p className="mt-3 font-serif text-lg">{label}</p>
  </div>
);

export const OverallStats = () => {
  return (
    <div className="my-5 text-neutral-800">
      <h2>Stats</h2>
      <ul className="grid sm:grid-cols-5 grid-cols-2 gap-5 sm:gap-4">
        {stats.map((stat) => (
          <li key={stat.label}>
            <Stat {...stat} />
          </li>
        ))}
      </ul>
    </div>
  );
};
