import React from "react";
import a from "next/link";

export const Navbar = () => (
  <ul className="flex p-4">
    <li className="mr-3">
      <a href="/">
        <div className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
          Home (Next.js)
        </div>
      </a>
    </li>
    <li className="mr-3">
      <a href="/careers">
        <div className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
          Careers (Next.js)
        </div>
      </a>
    </li>
    <li className="mr-3">
      <a href="/faq">
        <div className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
          FAQ (React SPA)
        </div>
      </a>
    </li>
    <li className="mr-3">
      <a href="/about">
        <div className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
          About (React SPA)
        </div>
      </a>
    </li>
    <li className="mr-3">
      <a href="/dashboard">
        <div className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
          Dashboard (React SPA)
        </div>
      </a>
    </li>
  </ul>
);
