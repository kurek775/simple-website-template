import React from "react";
import Layout from "../components/Layout";
import { PageConfig } from "../config/emperor.model";
import ResponsiveSlider from "../components/ResponsiveSlider";

const Presentation: React.FC<PageConfig> = (props) => {
  return (
    <Layout
      headerProps={{
        h1Title: props.h1Title,
        headerBgImage: props.headerBgImage,
      }}
    >
      <ResponsiveSlider />
    </Layout>
  );
};

export default Presentation;
