import blogPosts from "./posts.json";

const Blog = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
    <ol>
      {blogPosts.map((post) => (
        <li key={post.href}>
          <div className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col">
              <a
                href={post.href}
                target="_blank"
                className="underline hover:no-underline"
              >
                {post.title}
              </a>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {post.summary}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Blog;
