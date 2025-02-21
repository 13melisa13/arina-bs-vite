// Тип, описывающий данные, с которыми работает
// форма, — почту и пароль пользователя

export type TRegisterData = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    password2: string
}

