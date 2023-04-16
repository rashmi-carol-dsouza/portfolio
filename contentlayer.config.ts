import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc: any) => doc._raw.flattenedPath,
  },
  structuredData: {
    type: 'object',
    resolve: (doc: any) => ({
      '@context': 'https://schema.org',
      '@type': 'ProjectPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      url: `https://rashmidsouza.com/projects/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Rashmi DSouza',
      },
    }),
  },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    outcome: {
      type: 'string',
    },
    pitch: {
      type: 'string',
    },
    liveDemo: {
      type: 'string',
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
  },
  // @ts-ignore
  computedFields,
}));

type NodeType = any;

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: NodeType) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: NodeType) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: NodeType) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});