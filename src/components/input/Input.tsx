import {ForwardedRef, InputHTMLAttributes} from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputRef?: ForwardedRef<HTMLInputElement>,
    error?: string,
    value?: string
    className?: string
}
export const Input = (
    {
        inputRef,
        error = "",
        value = "",
        className = undefined,
        ...props
    }: InputProps
) => {
    return (
        <label className={styles.inputBox}>
            <span className={styles.label}>
                {props.placeholder}
            </span>
            <input

                autoCapitalize={"off"}
                autoComplete={"new-password"}
                className={clsx(styles.input, className, error && styles.errorInput,
                    !error && value && styles.successInput
                )}
                            ref={inputRef}
                            {...props}
                            value={value}

            />
            <span className={styles.error}>
                {error || ""}
            </span>
        </label>
    )
};