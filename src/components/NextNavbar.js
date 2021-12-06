import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NextNavbar = () => {
  const router = useRouter();
  return (
    <>
      {!router.pathname.includes("[...app]") && (
        <ul className="flex p-4">
          <li className="mr-3">
            <Link href="/">
              <div className="inline-block px-4 py-2 rounded cursor-pointer">
                Home
              </div>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/careers">
              <div className="inline-block px-4 py-2 rounded cursor-pointer">
                Careers
              </div>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/faq">
              <div className="inline-block px-4 py-2 rounded cursor-pointer">
                FAQ
              </div>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/about">
              <div className="inline-block px-4 py-2 rounded cursor-pointer">
                About
              </div>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/dashboard">
              <div className="inline-block px-4 py-2 rounded cursor-pointer">
                Dashboard
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
