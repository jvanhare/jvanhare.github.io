import Link from "next/link";
import { GetStaticProps } from "next";

import Layout from "../src/components/Layout";
import DateFormat from "../src/components/DateFormat";

type Props = {
  cv: any;
};

export const getStaticProps = (async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/jvanhare/cv/master/cv.json"
  );
  const cv = await res.json();
  return { props: { cv } };
}) satisfies GetStaticProps<{
  cv: Props;
}>;

export default function Teaching({ cv }: Props): JSX.Element {
  return (
    <Layout>
      <h1>Teaching</h1>

      {cv.teaching.map((t: any) => (
        <div key={t.institution_name}>
          <h2>{t.title}</h2>
          <Link
            target="_blank"
            href={t.institution_url}
            className="no-underline hover:underline text-sky-500 hover:text-sky-500"
          >
            {t.institution_name}
          </Link>
          <div className="text-gray-400">
            {t.location_city}, {t.location_country}
          </div>
          <DateFormat start={t.start_date} end={t.end_date ? t.end_date : ""} />
          <div className="italic">{t.description}.</div>
          <ol className="mx-4 my-4">
            {t.objectives.map((o: any) => (
              <li className="list-disc list-outside pt-0 mb-0 ml-4" key={o}>
                {o}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </Layout>
  );
}
