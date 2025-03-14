import { PageConfig } from "./emperor.model";

export const pages: PageConfig[] = [
  {
    url: "/nvm",
    title: "nvm",
    variantProps: {
      variant: "presentation",
      id: 20,
    },
  },
  {
    url: "/test",
    title: "test",
    variantProps: {
      variant: "presentation",
      id: 2,
    },
  },
  {
    url: "/",
    title: "home",
    variantProps: {
      variant: "home",
      id: 1,
    },
  },
];
