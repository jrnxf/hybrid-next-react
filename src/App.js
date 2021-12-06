import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactNavbar } from "./components/ReactNavbar";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered)
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <>
      <Router>
        <ReactNavbar />
        <Routes>
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
    </>
  );
}

// You can think of these components as "pages"
// in your app.

function Faq() {
  return (
    <div>
      <div className="flex justify-center m-8">
        <h1>
          FAQ <span className="italic font-medium">rendered by React SPA</span>
        </h1>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="flex justify-center m-8">
        <h1>
          About{" "}
          <span className="italic font-medium">rendered by React SPA</span>
        </h1>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <div className="flex justify-center m-8">
        <h1>
          Dashboard{" "}
          <span className="italic font-medium">rendered by React SPA</span>
        </h1>
      </div>{" "}
    </div>
  );
}
