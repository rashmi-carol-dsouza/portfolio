import { CustomLink } from "./mdx";

type ProjectLinkProps = {
  code?: string;
  pitch?: string;
  liveDemo?: string;
  outcome?: string;
};

type Link = {
  text: string;
  value: string;
};

const ProjectLinks = (props: ProjectLinkProps) => {
  const propToTextMapping = {
    code: {
      text: "Code",
      value: props.code,
    },
    pitch: {
      text: "Pitch",
      value: props.pitch,
    },
    liveDemo: {
      text: "Demo",
      value: props.liveDemo,
    },
    outcome: {
      text: "Outcome",
      value: props.outcome,
    },
  };

  const links = [
    propToTextMapping.code,
    propToTextMapping.pitch,
    propToTextMapping.liveDemo,
    propToTextMapping.outcome,
  ].filter((prop) => !!prop.value) as Link[];

  return (
    <ul className="project-links flex space-x-2">
      {links.map((link) => (
        <li key={link.value}>
          <CustomLink href={link.value}>{link.text}</CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default ProjectLinks;
