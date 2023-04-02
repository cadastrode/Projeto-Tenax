import {useState, useEffect} from 'react'
import Input from '../form/input'
import{Link} from 'react-router-dom'

import Select from '../form/select'
import Submit from '../form/submit'
import styles from '../projetos/pform.module.css'

export default function Pformulario({handleSubmit, btntext, projectData}){
    const[categorias,setcategorias]=useState([])
    const[projeto,setProjeto]= useState(projectData || {})

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
    
   const submit= (e)=>{
       e.preventDefault()
        handleSubmit(projeto)
        console.log(projeto)
   }
    function handleChange(e){
        setProjeto({...projeto, [e.target.name]: e.target.value})
    }
    function handleCategoria(e){
        setProjeto({...projeto, categorias:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },})
    }
    return(
        <form onSubmit={submit} className={styles.form} >
           <Input type='text' text='Nome do projeto'
           name='name'
           placeholder='digite o nome do projeto'
           handleOnChange={handleChange} value={projeto.nome}
           />
           <Input type='number' text='Valor Desejado'
           name='investimento'
           placeholder='digite o valor pretendido'
           handleOnChange={handleChange}
           value={projeto.investimento ? projeto.investimento: '' }
           />
           <Select name='categoria_id' text='Selecione uma categoria' options={categorias}
           handleOnChange={handleCategoria}
           value={projeto.categorias ? projeto.categorias.id: '' } />
           <Submit text={btntext}/>
        </form>
    )
}