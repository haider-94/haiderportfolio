"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import Link from "next/link";

function NavItem({
  text,
  active,
  href,
  className = "",
  ...props
}: {
  text: string;
  active: boolean;
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <Link
      href={href as string}
      data-active={active}
      aria-label={text}
      className={cn(
        "z-10 px-5 py-2.5 bg-transparent cursor-pointer trans nav-item rounded-lg"
        // className
      )}
      {...props}
    >
      {text}
    </Link>
  );
}

const animateOptions = {
  duration: 300,
  easing: "ease-in-out",
  fill: "forwards",
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const hoverBox = useRef<HTMLDivElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const mouseInsideNav = useRef<boolean>(false);

  // useLayoutEffect(() => {
  //   if (pathname === "/admin") {
  //     return;
  //   }

  //   const activeItem = navItems.find((item) => item.href === pathname);
  //   if (!activeItem) {
  //     return;
  //   }

  //   activeBox.current!.animate(
  //     {
  //       transform: `translateX(${activeItem.offsetLeft}px)`,
  //       width: `${activeItem.offsetWidth}px`,
  //     },
  //     animateOptions
  //   );
  // }, [])

  return (
    <header
      className="relative flex items-center justify-between h-[var(--h-header)] px-page trans"
      style={{
        display: pathname.startsWith("/admin") ? "none" : "flex",
      }}
    >
      <span
        className="text-lg cursor-pointer font-bold"
        onClick={() => {
          router.push("/");
        }}
      >
        Haider Ali
      </span>
      <div className="flex-1"></div>
      <div>
        <nav
          className="relative hidden gap-2 md:flex"
          onMouseEnter={() => {
            hoverBox.current!.animate(
              {
                opacity: 1,
              },
              {
                duration: 300,
                fill: "forwards",
                easing: "ease-in-out",
              }
            );
          }}
          onMouseLeave={() => {
            mouseInsideNav.current = false;
            hoverBox.current!.animate(
              {
                opacity: 0,
              },
              {
                duration: 300,
                easing: "ease-in-out",
                fill: "forwards",
              }
            );
          }}
        >
          <div
            ref={hoverBox}
            className="absolute inset-y-0 left-0 rounded-lg opacity-0 pointer-events-none bg-blue-400/20"
          ></div>
          <div
            ref={activeBox}
            className="absolute inset-y-0 left-0 rounded-lg opacity-0 pointer-events-none"
          ></div>
          {navItems.map((item, i) => (
            <NavItem
              {...item}
              key={i}
              href={item.href}
              active={item.href === pathname}
              onMouseEnter={(e) => {
                hoverBox.current!.animate(
                  {
                    transform: `translateX(${e.currentTarget.offsetLeft}px)`,
                    width: `${e.currentTarget.offsetWidth}px`,
                  },
                  {
                    duration: mouseInsideNav.current ? 300 : 10,
                    easing: "ease-in-out",
                    fill: "forwards",
                  }
                );
                mouseInsideNav.current = true;
              }}
              onClick={(e) => {
                activeBox.current!.animate(
                  {
                    transform: `translateX(${e.currentTarget.offsetLeft}px)`,
                    width: `${e.currentTarget.offsetWidth}px`,
                  },
                  {
                    duration: 300,
                    easing: "ease-in-out",
                    fill: "forwards",
                  }
                );
                router.push(item.href);
              }}
            />
          ))}
        </nav>
      </div>
      <div>
        <MobileMenu />
      </div>
    </header>
  );
}
