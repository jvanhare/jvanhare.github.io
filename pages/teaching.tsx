import Link from "next/link";

import Layout from "../src/components/Layout";
import DateFormat from "../src/components/DateFormat";

import cv from "../src/data/cv.json";

export default function Teaching(): JSX.Element {
  return (
    <Layout>
      <h1>Teaching</h1>

      {cv.teaching.map((t) => (
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
          <DateFormat start={t.start_date} end="" />
          <div className="italic">{t.description}.</div>
          <ol className="mx-4 my-4">
            {t.objectives.map((o) => (
              <li className="list-disc list-inside pt-0 mb-0" key={o}>
                {o}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </Layout>
  );
}
