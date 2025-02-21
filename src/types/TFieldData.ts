// Этот тип описывает конкретное поле формы:
// field — содержит название поля (в нашем случае email или password)
// value — значение для этого поля
export type TFieldType<T> = {
    field: keyof T;
    value: string;
}