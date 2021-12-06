import "../styles/globals.css";
import { Navbar } from "../src/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />

      <hr />

      <div className="mx-8 mt-4">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
