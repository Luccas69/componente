import styles from './styles.module.css'

export default function Caixa (){
    return(
        <div className={styles.caixa}>

        <h1 className={styles.titulo}>Esse conteúdo foi útil?</h1>
        <button className={styles.botao_sim}>😄 Sim</button>
        <button className={styles.botao_nao}>😢 Não</button>
        
        </div>
    )
}