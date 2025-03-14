import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { pages } from "../config/emperor";
export interface PageProps {
  url: string;
  title: string;
}
export interface HeaderProps {
  h1Title?: string;
}
const Header = (props: HeaderProps) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">{"props.icon"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {pages &&
                pages.map((page, index) => (
                  <Nav.Link key={index} href={page.url}>
                    {page.title}
                  </Nav.Link>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.h1Title}
    </div>
  );
};

export default Header;
