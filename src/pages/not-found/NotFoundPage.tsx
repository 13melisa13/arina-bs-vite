import React from 'react';
import {UIButton} from "../../components/ui-button/UIButton";
import styles from './notfoundpage.module.scss';
export default function NotFoundPage() {
    return (
        <>
                <h1 className={styles.title}>404</h1>
                <div className={styles.line}>
                    <p className={styles.text}>Страница не найдена. </p>
                    <UIButton to={'/'} children='Вернуться на главную' backgroundColor={'transparent'}
                              color={'dark-pink'}/>
                </div>
                <div className={styles.image}/>
            </>
        )
}