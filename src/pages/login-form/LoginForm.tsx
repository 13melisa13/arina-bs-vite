import {FormEvent, useLayoutEffect, useRef} from "react";
import {TLoginData} from "../../types/TLoginData";
import {useDispatch, useSelector} from "react-redux";
import {authSelector, sendingSelector, sendErrorSelector, setFormValue} from "../../services/authSlice";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import {login} from "../../services/authAction";
import formValidators from "../../validators/validators";
import {Input} from "../../components/input/Input";
import Form from "../../components/form/Form";
import {UIButton} from "../../components/ui-button/UIButton";

export default function LoginForm() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isSending = useSelector(sendingSelector);
    const sendingError = useSelector(sendErrorSelector);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const { values, handleChange, errors, isValid } =
        useFormWithValidation<TLoginData>(
                    authSelector,
          setFormValue,
          formValidators
);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(login(values))
    }

    return (
        <Form handleSubmit={handleSubmit}
              name={"Вход"}
               sendingError={sendingError}
                text={
            <>Ещё не зарегистрированы? <UIButton to='/register'
                backgroundColor={'transparent'}
                color={'dark-pink'}
                paddingAside={0}
                                                 paddingTop={0}
            >Регистрация</UIButton></>
                }
        >
            <Input
                inputRef={inputRef}
                type='email'
                name='email'
                id='email'
                // className={styles.input}
                placeholder='Email'
                value={values?.email || ''}
                error={errors?.email}
                onChange={handleChange}
                aria-invalid={!!errors?.email}
            />
            <Input
                type='password'
                name='password'
                id='password'
                placeholder='Пароль'
                value={values?.password || ''}
                error={errors?.password}
                onChange={handleChange}
                aria-invalid={!!errors?.password}
            />
            <UIButton
                
                backgroundColor={'dark-pink'}
                type='submit'
                disabled={!isValid || isSending}
            > {isSending ? "Отправка..." : "Войти"}
            </UIButton>

        </Form>
    );

}