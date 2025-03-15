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

export type FooterColumnType = "map" | "menu" | "info" | "empty";

export interface FooterColumnConfig {
  columnType: FooterColumnType;
  title: string;
  width: number;
}

export interface FooterConfig {
  footerBgImage: string;
  columns: FooterColumnConfig[];
}

export interface PageConfig extends PageBaseConfig {
  url: string;
  title: string;
  h1Title?: string;
  headerBgImage?: string;
  variantProps: PageVariantProps;
}
