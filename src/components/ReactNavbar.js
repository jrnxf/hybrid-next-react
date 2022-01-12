import React from "react";
import { Link } from "react-router-dom";

export const ReactNavbar = () => (
  <nav>
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
        <Link to="/faq">
          <div className="inline-block px-4 py-2 rounded cursor-pointer">
            FAQ
          </div>
        </Link>
      </li>
      <li className="mr-3">
        <Link to="/about">
          <div className="inline-block px-4 py-2 rounded cursor-pointer">
            About
          </div>
        </Link>
      </li>
      <li className="mr-3">
        <Link to="/dashboard">
          <div className="inline-block px-4 py-2 rounded cursor-pointer">
            Dashboard
          </div>
        </Link>
      </li>
    </ul>
  </nav>
);
