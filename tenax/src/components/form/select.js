import styles from './select.module.css'
export default function Select({text, name, options, value, handleOnChange}){

    return(
        <div className={styles.controle_form}>
            <label htmlFor={name} >{text}</label>
            <select name='name' id='name' onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma Opção</option>
            {options.map((opt)=>(
               <option value={opt.id} key={opt.id} >{opt.name}</option>  
            ))}
           
            </select>
        </div>
    )
}