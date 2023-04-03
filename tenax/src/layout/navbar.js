import {Link} from 'react-router-dom'
import styles from './navbar.module.css'
import Logo from '../img/icon.png'
export default function Navbar(){

    return(
        <nav className={styles.nav} >
               <li>
      <Link to="/"><img src={Logo} alt="Tenax"/> </Link>
          </li>
        <ul>
          <li>
      <Link to="/">Início</Link>
          </li>
          <li>
      <Link to="/projeto">Projeto</Link>
          </li>
          <li>
      <Link to="/contato">Contato</Link>
          </li>
          <li>
      <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
        </nav>
        
    )
}