const Navbar = () => {
  return (
    <header className="absolute top-0 w-full py-4">
      <nav className="flex max-w-screen-xl px-2 items-center mx-auto justify-between">
        <div className="w-24 h-auto">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className="flex items-center space-x-4">
          <li className="font-main font-bold text-xl">Home</li>
          <li className="font-main font-bold text-xl">Menu</li>
          <button className="transition-all hover:shadow-btn px-4 py-1 font-bold rounded border border-primary text-primary font-main uppercase">
            Log in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
