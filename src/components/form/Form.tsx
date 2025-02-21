import styles from "./form.module.scss";
import clsx from "clsx";

type TFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    sendingError: string | null;
    children: React.ReactNode;
    text?: React.ReactNode;
}

export default function Form({...props}: TFormProps) {
    const {
        handleSubmit,
        name,
        sendingError,
        children,
        text

    } = props;

    return (
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
            <h2 className={styles.title}>{name}</h2>
            {children}

            {sendingError && (
                <span className={styles.send_error}>
                                    {`Ошибка: ${sendingError}`}
                </span>
            )}
            <div className={clsx(styles.text)}>{text}</div>
        </form>
    )
}