import { FooterConfig, PageConfig } from "./emperor.model";

export const footerConfig: FooterConfig = {
  columns: [
    {
      columnType: "map",
      title: "QQQQ",
      width: 25,
    },
    {
      columnType: "empty",
      title: "QQQQ",
      width: 25,
    },
    {
      columnType: "menu",
      title: "QQQQ",
      width: 25,
    },
    {
      columnType: "info",
      title: "QQQQ",
      width: 25,
    },
  ],
  footerBgImage:
    "https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png",
};

export const pages: PageConfig[] = [
  {
    url: "/nvm",
    title: "nvm",
    h1Title: "Nvm",
    headerBgImage:
      "https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png",
    variantProps: {
      variant: "presentation",
      id: 20,
    },
  },
  {
    url: "/test",
    title: "test",
    h1Title: "test",
    headerBgImage:
      "https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png",
    variantProps: {
      variant: "presentation",
      id: 2,
    },
  },
  {
    url: "/",
    title: "home",
    h1Title: "Home",
    headerBgImage:
      "https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png",
    variantProps: {
      variant: "home",
      id: 1,
    },
  },
];
