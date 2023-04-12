"use client";

import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import logo from "../../public/images/logo.svg";

const RESUME_PATH =
  "https://docs.google.com/document/d/1IS8AkTmY1Z1GxdXoKF771m3wzbxOTIsajglC2bPppO4/edit?usp=sharing";

type NavFields = {
  name: string;
  isExternal: boolean;
};

type NavEntry = {
  [key: string]: NavFields;
};

const navItems: NavEntry = {
  "/projects": {
    name: "projects",
    isExternal: false,
  },
  "/talks": {
    name: "talks",
    isExternal: false,
  },
  "/about": {
    name: "about",
    isExternal: false,
  },
  "/blog": {
    name: "blog",
    isExternal: false,
  },
  [RESUME_PATH]: {
    name: "resume",
    isExternal: true,
  },
};

function Logo() {
  return (
    <Link aria-label="Rashmi DSouza" href="/">
      <Image src={logo} alt="Picture of the author" width={25} height={37} />
    </Link>
  );
}

type NavLinkProps = {
  path: string;
  isActive?: boolean;
  name: string;
};

const getLinkStyles = (isActive: boolean) =>
  clsx(
    "transition-all hover:text-neutral-800 flex align-middle",
    {
      "text-neutral-500": !isActive,
      "font-bold": isActive,
    }
  );

const ExternalNavLink = ({ path, isActive, name }: NavLinkProps) => (
  <a
    key={path}
    href={path}
    className={getLinkStyles(Boolean(isActive))}
    target="_blank"
  >
    <span className="relative py-[5px] px-[10px]">{name}</span>
  </a>
);

const InternalNavLink = ({ path, isActive, name }: NavLinkProps) => (
  <Link key={path} href={path} className={getLinkStyles(Boolean(isActive))}>
    <span className="relative py-[5px] px-[10px]">
      {name}
      {isActive ? (
        <motion.div
          className="absolute inset-0 bg-neutral-100 rounded-md z-[-1]"
          layoutId="sidebar"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      ) : null}
    </span>
  </Link>
);

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name, isExternal }]) => {
                const isActive = path === pathname;
                const props = { path, name, isActive, key: path };
                return isExternal ? (
                  <ExternalNavLink path={path} name={name} key={path} />
                ) : (
                  <InternalNavLink
                    path={path}
                    name={name}
                    isActive={isActive}
                    key={path}
                  />
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
