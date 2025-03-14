import React from "react";
import Layout from "../components/Layout";
import { HeaderProps } from "../components/Header";
import { PageConfig } from "../config/emperor.model";

const Presentation: React.FC<PageConfig> = (props) => {
  return (
    <Layout headerProps={{ h1Title: props.h1Title }}>
      <h2>Welcome to the Presentation</h2>
    </Layout>
  );
};

export default Presentation;
