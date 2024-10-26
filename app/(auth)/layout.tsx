"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Froget Password",
    href: "/forgetPassword",
  },
];

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={index} replace>
            <span
              className={`${isActive ? "font-bold " : " text-green-500"} m-5`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default layout;
