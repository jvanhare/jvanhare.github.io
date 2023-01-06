import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

import { ReactNode } from "react";

import cv from "../data/cv.json";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Head>
      <title key="gen-title">
        {cv.personal_data.first_name + " " + cv.personal_data.last_name}
      </title>
      <meta
        name="description"
        content={
          cv.personal_data.first_name +
          " " +
          cv.personal_data.last_name +
          "'s website"
        }
        key="gen-desc"
      />
      {cv.personal_data.keywords.map((keyword, i) => (
        <meta
          name={"keyword"}
          content={keyword}
          key={"gen-keywords-" + (i + 1)}
        />
      ))}
      <meta
        name="google-site-verification"
        content="4_-iwXy7om5Xryr9DhjyOV20kyLapnbl8QP164lW68Y"
      />
    </Head>
    <ThemeProvider attribute="class">
      <div className="container mx-auto max-w-3xl px-4 text-lg">
        <NavBar />
        <main>
          <div className=" py-4">{children}</div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  </div>
);

export default Layout;
