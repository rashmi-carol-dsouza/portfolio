"use client";

import Image from "next/image";
import CountUp from "react-countup";
import achievements from "./achievements.json";
import stats from "./stats.json";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f8edeb" offset="20%" />
      <stop stop-color="#fae1dd" offset="50%" />
      <stop stop-color="#ffe5d9" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ffe5d9" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
  type: string;
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
  blur?: boolean;
};

type PlaceholderValue = 'blur' | 'empty';

const getImageProps = ({
  height,
  width,
  description,
  imageUrl,
  blur
}: AchievementProps) => ({
  height,
  width,
  alt: description,
  src: imageUrl,
  className: "my-0 mx-auto",
  placeholder: blur ? 'blur' as PlaceholderValue : undefined,
  blurDataURL: blur ? `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}` : undefined,
});

const AchievementImage = (props: AchievementProps) => {
  const imageProps = getImageProps(props);
  return props.linkImage ? (
    <a href={props.imageUrl} target="_blank">
      <Image {...imageProps} />
    </a>
  ) : (
    <Image {...imageProps} />
  );
}

type BadgeProps = {
  issuerUrl: string;
  title: string;
};

const Badge = ({ issuerUrl, title }: BadgeProps) => (
  <p className="text-xs">
    <a href={issuerUrl} target="_blank">
      {title}
    </a>
  </p>
);

type CertProps = {
  issuerUrl: string;
  issuedBy: string;
  title: string;
};

const Certificate = ({ issuerUrl, issuedBy, title }: CertProps) => (
  <p className="text-xs">
    <span className="block">{title}</span>
    <a href={issuerUrl} target="_blank">
      {issuedBy}
    </a>
  </p>
);

const Achievement = (props: AchievementProps) => {
  const {
    type,
    imageUrl,
    title,
    description,
    issuedBy,
    issuerUrl,
    width,
    height,
    linkImage,
  } = props;
  return (
    <div className="text-center">
      <AchievementImage {...props} />
      <div className="mt-2">
        {type === "badge" ? (
          <Badge title={title} issuerUrl={issuerUrl} />
        ) : (
          <Certificate
            issuerUrl={issuerUrl}
            issuedBy={issuedBy}
            title={title}
          />
        )}
      </div>
    </div>
  );
};

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
        <AchievementsList achievements={hackathons} title="Hackathons" />
        <AchievementsList achievements={badges} title="Badges" />
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
