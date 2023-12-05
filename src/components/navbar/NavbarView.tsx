const NavbarView = () => (
  <header>
    <nav className="fixed flex flex-wrap items-center justify-between w-screen px-6 py-5 bg-zinc-800">
      <h2 className="text-2xl font-bold">React</h2>
      <ul className="flex gap-3">
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
