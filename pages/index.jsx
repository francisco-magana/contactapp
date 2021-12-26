import styles from "../styles/login.module.css";

// Comentarios para el soporte de vim
const LoginPage = () => {
    
    return (
        <div className={styles.background}>
            <div className={styles.login}>
                <h1 className={styles.login__title}>LOG IN</h1>
                <input type="text" className={styles.login__input}/>
                <input type="password" className={styles.login__input}/>
                <button className={styles.login__button}>INGRESAR</button>
            </div>
        </div>
    );

}

export default LoginPage;
