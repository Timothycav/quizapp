import { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={ styles.navbar}>
       {/* Hamburger Icon */}
     <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/html" onClick={() => setIsOpen(false)}>
            HTML
          </Link>
        </li>
        <li>
          <Link href="/css" onClick={() => setIsOpen(false)}>
            CSS
          </Link>
        </li>
        <li>
          <Link href="/js" onClick={() => setIsOpen(false)}>
            JS
          </Link>
        </li>
        <li>
          <Link href="/acc" onClick={() => setIsOpen(false)}>
            ACC
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
