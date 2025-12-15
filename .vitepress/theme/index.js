// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import HomeFeatures from "./components/HomeFeatures.vue";
import HomeHero from "./components/HomeHero.vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },

  enhanceApp({ app, router, siteData }) {
    app.component("HomeHero", HomeHero);
    app.component("HomeFeatures", HomeFeatures);
  },
  themeConfig: {
    footer: {
      message: "© 2025 Study in Japan",
      copyright: "All rights reserved.",
    },
  },
};
