import styles from "./Header.module.css"

const Header = () => {
    return (
        <div>
            <ul className={styles.navig}>
                <li>sns</li>
                <li>поисковик</li>
                <li>иконка музыки</li>
                <li>мой профиль</li>
            </ul>
        </div>
    );
};

export default Header;