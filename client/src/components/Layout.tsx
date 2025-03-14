import React from "react";
import Header, { HeaderProps } from "./Header";
import Footer from "./Footer";
export interface LayoutProps {
  children: React.ReactNode;
  headerProps: HeaderProps;
}
const Layout: React.FC<LayoutProps> = ({ children, headerProps }) => {
  return (
    <div>
      <Header {...headerProps} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
