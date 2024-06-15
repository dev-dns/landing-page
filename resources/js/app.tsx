import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import Navbar from "./Components/ui/navbar";
import Bottombar from "./Components/ui/bottombar";

import "swiper/css";
import "swiper/css/pagination";
import Light from "./Components/ui/light";

createInertiaApp({
  title: (title) => `${title}`,
  resolve: (name: string) =>
    resolvePageComponent(
      `./Pages/${name}/page.tsx`,
      import.meta.glob("./Pages/**/*.tsx"),
    ),
  setup({ el, App, props }) {
    createRoot(el).render(
      <>
        <Navbar />
        <App {...props} />
        <Bottombar />
        <Light />
      </>,
    );
  },
  progress: {
    color: "#4B5563",
  },
});
