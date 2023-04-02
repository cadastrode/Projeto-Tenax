import styles from '../form/imput.module.css'
export default function Input({type, text, name, placeholder, value, handleOnChange}){

    return(
        <div className={styles.controle_form}>
            <label htmlFor={name} >{text}</label>
          <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} onChange={handleOnChange} value={value}>
          </input>
        </div>
    )
}