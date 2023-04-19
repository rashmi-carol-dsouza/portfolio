'use client'

import Image from "next/image";
import CountUp from 'react-countup';
import achievements from "./achievements.json";
import stats from "./stats.json";

const badges: BadgeProps[] = achievements.filter((achievement) => achievement.type === "badge");
const hackathons = achievements.filter((achievement) => achievement.type === "hackathon");

type SocialMentionProps = {
  src: string;
  url: string;
  text: string;
};

type BadgeProps = {
  imageUrl: string;
  title: string;
  description: string;
  issuedBy: string;
  issuerUrl: string;
  lessonsLearned?: string;
  socialMentions?: SocialMentionProps[];
  rank?: number;
};

const Badge = ({
  imageUrl,
  title,
  description,
  issuedBy,
  issuerUrl,
}: BadgeProps) => (
  <div className="flex items-center">
    <Image
      alt={description}
      src={imageUrl}
      width={65}
      height={65}
      priority
    />
    <div>
      <p>
        Issued by:{" "}
        <a href={issuerUrl} target="_blank">
          {issuedBy}
        </a>
      </p>
      <p>{description}</p>
    </div>
  </div>
);

type BadgesProps = {
  badges: BadgeProps[];
};

const Badges = ({ badges }: BadgesProps) => (
  <div>
    <h2>Badges</h2>
    <ul>
      {badges.map((badge) => (
        <li key={badge.title}>
          <Badge {...badge} />
        </li>
      ))}
    </ul>
  </div>
);

export const Achievements = () => {
  return (
    <div className="my-5 text-neutral-800">
      <h2>Achievements</h2>
      <Badges badges={badges} />
    </div>
  );
};

type StatProps = {
  label: string;
  number: number;
  duration: number; 
}
const Stat = ({ label, number, duration }: StatProps) => (
  <div className="text-center">
    <CountUp end={number} duration={duration} start={0} className="text-xl font-bold"/>
    <p className="mt-3 font-serif text-lg">{label}</p>
  </div>
);

export const OverallStats = () => {
  return (
    <div className="my-5 text-neutral-800">
      <h2>Stats</h2>
      <ul className="grid sm:grid-cols-5 grid-cols-2 gap-5 sm:gap-4">
        {stats.map(stat => <li key={stat.label}><Stat {...stat} /></li>)}
      </ul>
    </div>
  );
};
