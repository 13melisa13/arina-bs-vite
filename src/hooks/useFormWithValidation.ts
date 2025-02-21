import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, useState} from "react";
import {TFieldType} from "../types/TFieldData";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {RootState} from "../services/store";
import {TFormValidators} from "../validators/validators";

 type TErrorState<T> = {
    [key in keyof T]: string;
}

type TUseFormWithValidation<T> = {
    values: T | undefined;
    handleChange: ((evt: ChangeEvent<HTMLInputElement>) => void) | undefined;
    errors: TErrorState<T> | undefined;
    isValid: boolean | undefined;
}

export function useFormWithValidation<T>(
    selector: (state: RootState) => T,
    setFormValue: ActionCreatorWithPayload<TFieldType<T>>,
    validators: TFormValidators<T>
): TUseFormWithValidation<T> {

    const values = useSelector(selector);
    const [errors, setErrors] =
                useState<TErrorState<T>>(initError<T>(values));
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const input = evt.target;
        const value = input.value;
        const name = input.name as keyof T;
        const isValid = validators[name]?.validator(value) ?? true;
        dispatch(setFormValue({ field: name, value}));
        setErrors({
                    ...errors,
                    [name]: !isValid ? validators[name]!.message : undefined
        });
        setIsValid(isValid);
    };

    return { values, handleChange, errors, isValid };
}

// Функция initError создаёт объект с такими же ключами, как у того,
//  с которым работает хук, но с пустыми строками в значениях
function initError<T>(a: T): TErrorState<T> {
    return Object.keys(a as object).reduce((acc, k) => {
            // @ts-ignore
            acc[k as keyof T] = "";
            return acc
        },
        {} as TErrorState<T>);
}