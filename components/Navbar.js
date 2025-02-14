import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={ styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/html">
            HTML
          </Link>
        </li>
        <li>
          <Link href="/css">
            CSS
          </Link>
        </li>
        <li>
          <Link href="/js">
            JS
          </Link>
        </li>
        <li>
          <Link href="/acc">
            ACC
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
