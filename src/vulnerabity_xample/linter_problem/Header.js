import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

function Header() {
  return (
    <Navbar color="light" light expand="md">
      {/* Icono a la izquierda */}
      <NavbarBrand href="/">
        <i className="bi bi-house-door-fill"></i> {/* Reemplaza con tu icono */}
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M706.3 422.3V94H542.2v328.3l82.1-82 82 82zM788.4 94h-49.3v49.3h49.3c4.5 0 8.2 3.7 8.2 8.2v722.4c0 4.5-3.7 8.2-8.2 8.2H230.2c-4.5 0-8.2-3.7-8.2-8.2V151.5c0-4.5 3.7-8.2 8.2-8.2h279.1V94H230.2c-31.7 0-57.5 25.8-57.5 57.5v722.4c0 31.7 25.8 57.5 57.5 57.5h558.3c31.7 0 57.5-25.8 57.5-57.5V151.5c-0.1-31.7-25.9-57.5-57.6-57.5z"
              fill="#5C99EE"
            ></path>
          </g>
        </svg>
      </NavbarBrand>

      {/* Título al centro */}
      <NavbarText className="h4 mx-auto">Reader</NavbarText>

      {/* Enlace de inicio de sesión a la derecha */}
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="">Sign In</NavLink>
          {/* <NavLink href="/signin">Sign In</NavLink> */}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
