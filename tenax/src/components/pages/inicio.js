import style from './inicio.module.css'
import ImPrincipal from '../../img/imghed.png'
import BtnLink from '../../layout/botaolink'
export default function Inicio(){

    return(
        <section className={style.centra}>
        <h1 className={style.ch1} >Bem-Vindo ao <span className={style.pspan}>TenaX</span> </h1>
        <p>Comece a gerenciar seus investimentos!</p>
        <BtnLink to="/projetos" text="Novo Projeto"/>
        <img className={style.principal} src={ImPrincipal} alt="Principal" />
        </section>
    )
}