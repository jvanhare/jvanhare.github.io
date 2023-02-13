import Link from "next/link";

import Layout from "../src/components/Layout";

import biblio from "../src/data/bibliography.json";

function sortPublication(a: any, b: any) {
  if (
    b.issued["date-parts"][0][0] > a.issued["date-parts"][0][0] ||
    b.issued["date-parts"][0][1] > a.issued["date-parts"][0][1]
  ) {
    return +1;
  } else return -1;
}

export type Author = {
  given: string;
  family: string;
};

function renderAuthors(author: Author[]) {
  return (
    <span className="whitespace-normal">
      {author
        .map((a) => a.given + " " + a.family)
        .join(", ")
        .replace(/, ([^,]*)$/, ", and $1") + ". "}
    </span>
  );
}

function renderTitle(title: string) {
  return (
    <span>
      <span
        className="font-bold whitespace-normal"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {". "}
    </span>
  );
}

function renderJournal(year: number, volume?: string, journal?: string) {
  if (journal != undefined) {
    return (
      <span>
        <span className="italic whitespace-normal">
          {journal} {volume}{" "}
        </span>
        <span>({year}).{" "}</span>
      </span>
    );
  }
  return null;
}

function renderConference(
  year: number,
  address: string | undefined,
  booktitle?: string
) {
  if (booktitle != undefined) {
    return (
      <span className="whitespace-normal">
        <span
          className="italic"
          dangerouslySetInnerHTML={{ __html: booktitle }}
        />
        <span>
          {". "}
          {address}, {year}.{" "}
        </span>
      </span>
    );
  }
  return null;
}

function renderThesis(year: number, publisher?: string) {
  if (publisher != undefined) {
    return (
      <span className="whitespace-normal">
        <span className="italic">{publisher}</span>
        {", "}
        {year}
        .{" "}
      </span>
    );
  }
  return null;
}

function renderDOI(doi?: string) {
  if (doi != undefined) {
    return (
      <Link
        target="_blank"
        href={`https://doi.org/${doi}`}
        className="no-underline hover:underline text-sky-500 hover:text-sky-500 visited:text-sky-500"
      >
        [{doi}]
      </Link>
    );
  }
  return null;
}

function renderPDF(url?: string) {
  if (url != undefined) {
    return (
      <Link
        target="_blank"
        href={url}
        className="no-underline hover:underline text-sky-500 hover:text-sky-500 visited:text-sky-500"
      >
        {" [PDF]"}
      </Link>
    );
  }
  return null;
}

export default function Publications(): JSX.Element {
  let Articles = biblio
    .filter((entry) => entry.type === "article-journal")
    .sort(sortPublication);

  let Papers = biblio
    .filter((entry) => entry.type === "paper-conference")
    .sort(sortPublication);

  let Conferences = biblio
    .filter((entry) => entry.type === "document")
    .sort(sortPublication);

  let Thesis = biblio
    .filter((entry) => entry.type === "thesis")
    .sort(sortPublication);

  return (
    <Layout>
      <h1>Publications</h1>

      <h2>Peer-reviewed journal articles</h2>
      <ol className="list-decimal list-inside">
        {Articles.map((article) => (
          <li key={article.id} className="my-4">
            {renderAuthors(article.author)}
            {renderTitle(article.title)}
            {renderJournal(
              article.issued["date-parts"][0][0],
              article.volume,
              article["container-title"]
            )}
            {renderDOI(article.DOI)}
            {renderPDF(article.URL)}
          </li>
        ))}
      </ol>

      <h2>Peer-reviewed conference papers</h2>
      <ol className="list-decimal list-inside">
        {Papers.map((paper) => (
          <li key={paper.id} className="my-4">
              {renderAuthors(paper.author)}
              {renderTitle(paper.title)}
              {renderConference(
                paper.issued["date-parts"][0][0],
                paper["publisher-place"],
                paper["container-title"]
              )}
              {renderDOI(paper.DOI)}
              {renderPDF(paper.URL)}
          </li>
        ))}
      </ol>

      <h2>Conferences and seminars</h2>
      <ol className="list-decimal list-inside">
        {Conferences.map((conference) => (
          <li key={conference.id} className="my-4">
              {renderAuthors(conference.author)}
              {renderTitle(conference.title)}
              {renderConference(
                conference.issued["date-parts"][0][0],
                conference["publisher-place"],
                conference["publisher"]
              )}
              {renderDOI(conference.DOI)}
              {renderPDF(conference.URL)}
          </li>
        ))}
      </ol>

      <h2>Thesis</h2>
      <ol className="list-decimal list-inside">
        {Thesis.map((thesis) => (
          <li key={thesis.id}>
              {renderAuthors(thesis.author)}
              {renderTitle(thesis.title)}
              {renderThesis(
                thesis.issued["date-parts"][0][0],
                thesis.publisher
              )}
              {renderDOI(thesis.DOI)}
              {renderPDF(thesis.URL)}
          </li>
        ))}
      </ol>
    </Layout>
  );
}
