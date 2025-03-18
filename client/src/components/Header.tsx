import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { pages } from "../config/emperor";
export interface PageProps {
  url: string;
  title: string;
}
export interface HeaderProps {
  h1Title?: string;
  headerBgImage?: string;
}
const Header = (props: HeaderProps) => {
  return (
    <header
      className="header-wrapper"
      style={{ backgroundImage: `url(${props.headerBgImage})` }}
    >
      <div className="navbar-wrapper">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/">{"props.icon"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                {pages.map((page, index) => (
                  <Nav.Link key={index} href={page.url}>
                    {page.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Container>
        <h1> {props.h1Title}</h1>
      </Container>
    </header>
  );
};

export default Header;
