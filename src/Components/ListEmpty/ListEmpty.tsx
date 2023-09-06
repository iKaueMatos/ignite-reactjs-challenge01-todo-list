import Clipboard from '../../assets/Clipboard.svg';

import styles from './ListEmpty.module.scss';

const ListEmpty = () => {
    return(
            <div className={styles.listEmpty}>
                <img src={Clipboard} alt="Icon of Clipboard" className={styles.iconClipBoard}/>
                <span>
                    <p className={styles.textInfo}><span className={styles.textBold}>Você ainda não tem tarefas cadastradas</span></p>
                    <p className={styles.textInfo}>Crie tarefas e organize seus itens a fazer</p>
                </span>
            </div>
        
    )
}

export default ListEmpty;