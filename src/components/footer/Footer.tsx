import styles from './footer.module.scss'
import {UIButton} from "../ui-button/UIButton";
import clsx from "clsx";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<UIButton to={'/'} children='О нас'
						  textAlign={'left'}
                    backgroundColor={'transparent'}/>
                <UIButton to={'/'} children='Пользовательское соглашение'
						  textAlign={'left'}
                    backgroundColor={'transparent'}/>
                <UIButton to={'/'} children='Политика конфиденциальности'
						  textAlign={'left'}
                    backgroundColor={'transparent'}/>
			</nav>
			<p className={clsx(styles.copy)}>&copy; 2024 Business-S4k@</p>
		</footer>
	)
}
