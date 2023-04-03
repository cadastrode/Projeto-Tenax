import{useNavigate} from 'react-router-dom'
import Pformulario from '../projetos/pform'
import styles from './projetos.module.css'


export default function Projetos(){

      const history = useNavigate()

      function criarProjetos(projeto){

        projeto.tenax=0
        projeto.serviço=[]

        fetch(' http://localhost:5000/projetos',{

          method:'POST',
          headers:{'content-type': 'application/json',
      },
      body: JSON.stringify(projeto),
        }).then((res => res.json())
            
        ).then((data)=>{
          history('/projeto', {mensagem: 'Projeto adicionado com sucesso'})
        }).catch(
            (err=> console.log(err))
        )

      }


    return(
       <div className={styles.centra}>
        <div className={styles.novop}>
        <h1>Criar Projetos</h1>
        <p>Adicione um progeto para criar os ivestimentos.</p>
        <Pformulario handleSubmit={criarProjetos} btntext='Criar Projetos'/>
        </div>
       </div>
    )
}