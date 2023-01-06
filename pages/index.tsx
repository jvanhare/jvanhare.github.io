import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

import { GetStaticProps } from "next";

import Layout from "../src/components/Layout";

type Props = {
  content: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const fid = fs.readFileSync("src/data/jvanhare.md", "utf-8");
  const md = matter(fid);
  return {
    props: {
      content: md.content,
    },
  };
};

export default function Index({ content }: Props): JSX.Element {
  return (
    <Layout>
      <div>
        <img
          className="w-32 md:w-64 rounded-full float-left mx-4 my-2 md:my-12 align-middle"
          src="/photo_square.jpg"
        />
        <ReactMarkdown
          children={content}
          components={{
            ul: ({ children }) => <ul className="mx-4 my-4">{children}</ul>,
            li: ({ children }) => (
              <li className="list-disc list-inside pt-0 mb-0">{children}</li>
            ),
            a: ({ children, ...props }) => (
              <a
                target="_blank"
                href={props.href}
                className=" no-underline hover:underline text-sky-500"
              >
                {children}
              </a>
            ),
            p: ({ children }) => <p className="mb-4">{children}</p>,
          }}
        />
      </div>
    </Layout>
  );
}
