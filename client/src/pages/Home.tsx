import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import ResponsiveSlider from "../components/ResponsiveSlider";
import { HeaderProps } from "../components/Header";
import { PageConfig } from "../config/emperor.model";

const Home: React.FC<PageConfig> = (props) => {
  return (
    <Layout
      headerProps={{
        h1Title: props.h1Title,
        headerBgImage: props.headerBgImage,
      }}
    >
      <Form></Form>
    </Layout>
  );
};

export default Home;
