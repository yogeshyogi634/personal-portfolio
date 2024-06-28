"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ link }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white p-1.5"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
