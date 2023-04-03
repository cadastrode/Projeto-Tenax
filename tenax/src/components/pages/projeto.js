import Mensagens from '../../layout/mensagens'
import styles from './projeto.module.css'
import { useLocation } from 'react-router-dom'

export default function Projeto(){

    const location = useLocation()
    let mensagem= ''
    if(location.state){
        mensagem=location.state.mensagem
    }

    return(
        <div className={styles.centra}>
        <div className={styles.arruma}>
        <h1>Meus Projetos</h1>
        {mensagem &&
        <Mensagens type='sucesso' msg={mensagem}  />}
        </div>
        </div>
    )
}