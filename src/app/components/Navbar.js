import Image from 'next/image'

const Navbar = ({ title, year }) => {
  return (
    <header>
      <div className="logo_container">
        <Image src="/assets/logo.png" alt="Logo" width={80} height={50} />
      </div>
      <nav>
        <ul className="navHeader">
          <li className="lista"> <a href="/">Home</a></li>
          <li className="lista"> <a href="/">Categorias</a></li>
          <li className="lista"> <a href="">About</a></li>
        </ul>
      </nav>
      <h3>{title}</h3> {/* muestra el título */}
      <p>{year}</p>      {/* Muestra el año */}
    </header>
  );
};

export default Navbar;
