import Link from "next/link";

import { Download } from "react-feather";

import Layout from "../src/components/Layout";
import DateFormat from "../src/components/DateFormat";

import cv from "../src/data/cv.json";

export default function CV(): JSX.Element {
  let professional_experience = cv.professional_experience.filter(
    (p) => new Date(p.start_date) > new Date(2015, 1, 1)
  );

  let education = cv.education.filter(
    (p) => new Date(p.start_date) > new Date(2008, 1, 1)
  );

  return (
    <Layout>
      <Link
        href="https://github.com/jvanhare/cv/raw/master/cv.pdf"
        className="no-underline hover:underline text-sky-500 hover:text-sky-500"
      >
        <h1>
          <Download className="mx-2 float-left" size={46} /> Curriculum Vitæ
        </h1>
      </Link>

      <h1>Professional experience</h1>

      {professional_experience.map((p, ip) => (
        <div key={p.company_name + "-" + ip} className="mb-4">
          <h2>{p.title}</h2>
          <Link
            target="_blank"
            href={p.company_url}
            className="no-underline hover:underline text-sky-500 hover:text-sky-500"
          >
            {p.company_name}
          </Link>
          {p.company_alt_name != null && (
            <span>
              {" "}
              -{" "}
              <Link
                target="_blank"
                href={p.company_url}
                className="no-underline hover:underline text-sky-500 hover:text-sky-500"
              >
                {p.company_alt_name}
              </Link>
            </span>
          )}
          <div className="text-gray-400">
            {p.location_city}, {p.location_country}
          </div>
          <DateFormat start={p.start_date} end={p.end_date} />
          <div className="italic">{p.description}</div>
          <ol className="mx-4 mt-4">
            {p.objectives.map((o) => (
              <li className="list-disc list-outside pt-0 mb-0 ml-4" key={o}>
                {o}
              </li>
            ))}
          </ol>
        </div>
      ))}

      <h1>Education</h1>

      {education.map((e, ie) => (
        <div key={e.institution_name + "-" + ie} className="mb-4">
          {e.pdf === undefined && <h2>{e.title}</h2>}
          {e.pdf != undefined && (
            <a
              target="_blank"
              href={e.pdf}
              className="no-underline hover:underline text-sky-500 hover:text-sky-500"
            >
              <h2>{e.title}</h2>
            </a>
          )}
          {e.company_name != null && (
            <span>
              <a
                target="_blank"
                href={e.company_url}
                className="no-underline hover:underline text-sky-500 hover:text-sky-500"
              >
                {e.company_name}
              </a>{" "}
              &{" "}
            </span>
          )}
          <a
            target="_blank"
            href={e.institution_url}
            className="no-underline hover:underline text-sky-500 hover:text-sky-500"
          >
            {e.institution_name}
          </a>
          <div className="text-gray-400">
            {e.location_city}, {e.location_country}
          </div>
          <DateFormat start={e.start_date} end={e.end_date} />
          <div className="italic">{e.description}</div>
          <ol className="mx-4 mt-4">
            {e.objectives != null &&
              e.objectives.map((o) => (
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
