import "../styles/globals.css";
import { Navbar } from "../src/components/ReactNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NextNavbar } from "../src/components/NextNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <NextNavbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
