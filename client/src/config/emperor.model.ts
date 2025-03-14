export type pageVariant = "home" | "presentation";

export interface BaseVariantProps {
  variant: pageVariant;
}
export interface PageVariantProps extends BaseVariantProps {
  id: number;
}

export interface PageBaseConfig {
  url: string;
  title: string;
}

export interface PageConfig extends PageBaseConfig {
  url: string;
  title: string;
  h1Title?: string;
  variantProps: PageVariantProps;
}
