import React, {CSSProperties} from 'react';
import styles from './map.module.scss';

export default function Map() {
    return (
        <aside className={styles.aside}>
            <iframe
                className={styles.map}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A48aea63395eb1b6981b34c1da0e3fc8a2084eb70837e1f7bc16cf6a72fe064bf&amp;source=constructor"
                frameBorder="0"></iframe>
        </aside>
    )
}