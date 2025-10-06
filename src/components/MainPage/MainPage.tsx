import React from 'react';
import Header from '../Header/header';
import Sections from '../Sections/Sections';
import Ribbon from '../Ribbon/Ribbon';
import Footer from '../Footer/Footer';
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.main}>
                <Sections/>
                <Ribbon/>
                <div>фильтр для ленты</div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainPage;