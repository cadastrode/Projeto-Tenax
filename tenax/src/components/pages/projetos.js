import Pformulario from '../projetos/pform'
import styles from './projetos.module.css'
export default function Projetos(){

    return(
       <div className={styles.centra}>
        <div className={styles.novop}>
        <h1>Criar Projetos</h1>
        <p>Adicione um progeto para criar os ivestimentos.</p>
        <Pformulario btntext='Criar Projetos'/>
        </div>
       </div>
    )
}