type TagProps = {
  title: string;
};

export const Tag = ({ title }: TagProps) => (
  <span className="lowercase text-xs bg-slate-200 rounded-md py-1 px-2">
    {title}
  </span>
);

type TagsProps = {
  tags: string[];
};

export const Tags = ({ tags }: TagsProps) => (
  <ul className="space-x-2 flex">
    {tags.map((tag) => (
      <li key={tag}>
        <Tag title={tag} />
      </li>
    ))}
  </ul>
);
