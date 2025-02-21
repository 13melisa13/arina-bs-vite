import  {FormEvent, useLayoutEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import {registerSelector, sendingSelector, sendErrorSelector, setFormValue} from "../../services/registerSlice";
import formValidators from "../../validators/validators";
import {Input} from "../../components/input/Input";
import Form from "../../components/form/Form";
import {TRegisterData} from "../../types/TRegisterData";
import {register} from "../../services/registerAction";
import {UIButton} from "../../components/ui-button/UIButton";

export default function RegisterForm() {
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
        useFormWithValidation<TRegisterData>(
           registerSelector,
          setFormValue,
          formValidators
);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(register(values))
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            name={"Регистрация"}
            sendingError={sendingError}
            text={
            <>Уже зарегистрированы? <UIButton
                backgroundColor={'transparent'}
                color={'dark-pink'}
                paddingTop={0}
                paddingAside={0}
                to='/login'>Войти</UIButton></>
            }
        >
            <Input
                inputRef={inputRef}
                type='text'
                name='firstName'
                id='firstName'
                // className={styles.input}
                placeholder='Имя'
                value={values?.firstName || ''}
                error={errors?.firstName}
                onChange={handleChange}
                aria-invalid={!!errors?.firstName}
            />
            <Input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Фамилия'
                value={values?.lastName || ''}
                error={errors?.lastName}
                onChange={handleChange}
                aria-invalid={!!errors?.lastName}
            />
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
            <Input
                type='password'
                name='password2'
                id='password2'
                placeholder='Повторите пароль'
                value={values?.password2 || ''}
                error={values?.password !== values?.password2 ? 'Пароли не совпадают' : errors?.password2}
                onChange={handleChange}
                aria-invalid={!!errors?.password2}
            />
            <UIButton

                backgroundColor={'dark-pink'}
                type='submit'
                disabled={isSending || !isValid}
            >
                {isSending ? 'Отправка...' : 'Зарегистрироваться'}
            </UIButton>

        </Form>
    );

}