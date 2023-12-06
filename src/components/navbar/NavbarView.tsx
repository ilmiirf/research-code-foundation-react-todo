import './Navbar.css';

const NavbarView = () => (
  <header>
    <nav>
      <h2 className="navbar__title">React</h2>
      <ul className="navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/todo">Todo</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavbarView;
