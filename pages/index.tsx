import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

import { GetStaticProps } from "next";

import Layout from "../src/components/Layout";

type Props = {
  md: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const md = await fetch(
    "https://raw.githubusercontent.com/jvanhare/jvanhare/master/README.md"
  )
    .then((r) => r.text())
    .then((r) => matter(r));
  return {
    props: {
      md: md.content,
    },
  };
};

export default function Index({ md }: Props): JSX.Element {
  return (
    <Layout>
      <div>
        <img
          className="w-32 md:w-64 rounded-full float-right mx-4 my-2 md:my-16 align-middle"
          src="/photo_square.jpg"
        />
        <ReactMarkdown
          children={md}
          components={{
            ul: ({ children }) => <ul className="mx-4 my-4">{children}</ul>,
            li: ({ children }) => (
              <li className="list-disc list-outside pt-0 mb-0 ml-4">
                {children}
              </li>
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
