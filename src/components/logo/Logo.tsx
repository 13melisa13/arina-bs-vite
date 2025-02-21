import styles from "./logo.module.scss";
import {UIButton} from "../ui-button/UIButton";

export default function Logo() {
    return (
        <UIButton
            title={"Главная"}
            to={'/'}
            className={styles.logo}
            children={''}
            backgroundColor={'transparent'}
            paddingTop={0}
            paddingAside={0}
            borderRadius={0}

        />

    )
}
