import {useState, useEffect} from 'react'
import Input from '../form/input'
import Select from '../form/select'
import Submit from '../form/submit'
import styles from '../projetos/pform.module.css'

export default function Pformulario({btntext}){
    const[categorias,setcategorias]=useState([])

   useEffect(()=>{
    fetch(' http://localhost:5000/categorias',{
        method: 'GET',
        headers: {
            'content-type': 'application/json ',
        },
      })
      .then((resp)=> resp.json()) 
      .then((data)=> { 
        setcategorias(data)
    })
      .catch((err)=>console.log(err))
   },[])

    return(
        <form className={styles.form} >
           <Input type='text' text='Nome do projeto'
           name='name'
           placeholder='digite o nome do projeto'/>
           <Input type='number' text='Valor Desejado'
           name='investimento'
           placeholder='digite o valor pretendido'/>
           <Select name='categoria_id' text='Selecione uma categoria' options={categorias} />
           <Submit text={btntext}/>
        </form>
    )
}