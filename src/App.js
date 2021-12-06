import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <Router>
      {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Faq() {
  return (
    <div>
      <h2>FAQ (React SPA)</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About (React SPA)</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard (React SPA)</h2>
    </div>
  );
}
