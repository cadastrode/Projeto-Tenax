import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa" ;   
import styles from './footer.module.css'  
export default function Footer(){

    return(
        <footer>
         <span><FaFacebook/></span>
         <span><FaInstagram/></span>
         <span><FaLinkedin/></span>
         <p  ><span className={styles.copy} >TenaX</span><span className={styles.copy}>&copy; 2023</span></p>
        </footer>
    )
}