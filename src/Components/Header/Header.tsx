import styles from './Header.module.scss';
import Logo from '../../assets/Logo.svg';

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={Logo}  className={styles.headerLogo} alt="Logo do Todo List" />
        </header>
    )
}

export default Header;