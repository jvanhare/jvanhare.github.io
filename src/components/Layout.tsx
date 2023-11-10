import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Head>
      <title key="gen-title">Julien Vanharen</title>
      <meta
        name="description"
        content="Julien Vanharen's website"
        key="gen-desc"
      />
      <meta
        name="google-site-verification"
        content="4_-iwXy7om5Xryr9DhjyOV20kyLapnbl8QP164lW68Y"
      />
      <meta
        name="theme-color"
        content="#f1f5f9"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1e293b"
        media="(prefers-color-scheme: dark)"
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
