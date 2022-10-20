import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BlogContainer from "./components/Blog/containers/BlogContainer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BlogContainer />
  </StrictMode>
);
