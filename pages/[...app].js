import { useEffect, useState } from "react";
import CreateReactAppRoot from "../src/App";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render client-side app unless window is available.
  // NOTE: Page not statically pre-rendered nor server-side renderable
  return isMounted ? <CreateReactAppRoot /> : null;
};

export default App;
