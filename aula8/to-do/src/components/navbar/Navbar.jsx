import hero from "../../assets/hero.png";

const Navbar = () => {
  return (
    <nav>
      <img src={hero} alt="Hero" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Sobre</a> 
        </li>

        <li>
          <a href="/">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
