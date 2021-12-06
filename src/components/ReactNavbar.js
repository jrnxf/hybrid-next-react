import React from "react";
import Link from "next/link";
import { Link as RRLink } from "react-router-dom";

export const ReactNavbar = () => (
  <ul className="flex p-4">
    <li className="mr-3">
      <a href="/">
        <div className="inline-block px-4 py-2 rounded cursor-pointer">
          Home
        </div>
      </a>
    </li>
    <li className="mr-3">
      <a href="/careers">
        <div className="inline-block px-4 py-2 rounded cursor-pointer">
          Careers
        </div>
      </a>
    </li>
    <li className="mr-3">
      <RRLink to="/faq">
        <div className="inline-block px-4 py-2 rounded cursor-pointer">FAQ</div>
      </RRLink>
    </li>
    <li className="mr-3">
      <RRLink to="/about">
        <div className="inline-block px-4 py-2 rounded cursor-pointer">
          About
        </div>
      </RRLink>
    </li>
    <li className="mr-3">
      <RRLink to="/dashboard">
        <div className="inline-block px-4 py-2 rounded cursor-pointer">
          Dashboard
        </div>
      </RRLink>
    </li>
  </ul>
);
