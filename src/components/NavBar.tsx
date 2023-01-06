import Link from "next/link";

import { Disclosure } from "@headlessui/react";

import { Book } from "react-feather";
import { GitHub } from "react-feather";
import { Mail } from "react-feather";
import { Menu } from "react-feather";
import { X } from "react-feather";

import Toggle from "./Toggle";

import cv from "../data/cv.json";

export type NavBarItem = {
  name: string;
  href: string;
  current: boolean;
};

const NavBarItems: NavBarItem[] = [
  { name: "About", href: "/", current: true },
  { name: "CV", href: "/cv", current: false },
  { name: "Publications", href: "/publications", current: false },
  { name: "Teaching", href: "/teaching", current: false },
];

const NavBar = () => (
  <Disclosure as="nav">
    {({ open }: any) => (
      <>
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <X className="block hover:text-sky-500" aria-hidden="true" />
              ) : (
                <Menu
                  className="block hover:text-sky-500"
                  aria-hidden="true"
                />
              )}
            </Disclosure.Button>
          </div>
          <div className="hidden sm:block align-middle">
            <div className="flex space-x-4 text-2xl font-serif">
              {NavBarItems.map((item) => (
                <h2 key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:underline hover:text-sky-500"
                  >
                    {item.name}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-0 sm:pr-0">
            <a
              aria-label="mailto"
              target="_blank"
              href={"mailto:" + cv.personal_data.email}
              className="hover:underline hover:text-sky-500 px-2"
            >
              <Mail />
            </a>
            <a
              aria-label="scholar"
              target="_blank"
              href={cv.personal_data.scholar}
              className="hover:underline hover:text-sky-500 px-2"
            >
              <Book />
            </a>
            <a
              aria-label="github"
              target="_blank"
              href={cv.personal_data.github}
              className="hover:underline hover:text-sky-500 px-2"
            >
              <GitHub />
            </a>
            <Toggle />
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className=" ">
            {NavBarItems.map((item) => (
              <Disclosure.Button
                aria-label={item.name}
                key={item.name}
                as="a"
                href={item.href}
                className={
                  "block rounded-md text-base font-medium hover:text-sky-500 hover:underline"
                }
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export { NavBar };
