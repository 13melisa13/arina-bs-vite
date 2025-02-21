import {Link} from "react-router-dom";
import styles from "./product.module.scss";
import {UIButton} from "../../ui-button/UIButton";
import {useDispatch} from "react-redux";
import {addProduct, decrementProduct, incrementProduct, Product as ProductType, removeProduct} from "../../../services/productSlice";
type ProductProps = {
    title: string
    id: number,
    imageUrl: string | null,
    price: number,
    count?: number,
    isAuth?: boolean

}
const defaultImageUrl = 'https://via.placeholder.com/150'
export default function Product({...cardProps}: ProductProps) {
    const dispatch = useDispatch();
    const {title, id, imageUrl
        , count, price
    } = cardProps
    if (!title || !id ) return null
    cardProps.isAuth = true;
    const buttonProps = {
        borderColor: "dark-pink" as const,
        color: "dark-pink" as const,
        backgroundColor: "white" as const,
        to: !cardProps.isAuth ? '/login' : undefined,
        paddingTop: 10,
        paddingAside: 10,
        className: styles.button
    }
    return <div
        className={styles.card}>
        <UIButton

                    img={'heart'}
                     paddingTop={0}
                     paddingAside={0}
                    backgroundColor={'transparent'}
                    className={styles.favorite}
                     onClick={() => {}}

                    children={""} title={"Отложить"} />
        <Link to={`/products/${id}`} className={styles.link}>

            <img src={imageUrl || defaultImageUrl}
                 onError={(e) => {
                     e.currentTarget.src = defaultImageUrl
                 }}
                 alt={title} className={styles.background}/>
        </Link>

        <p className={styles.price}>{price}руб.</p>
        <h3 className={styles.title}>{title.slice(0,15)}{title.length > 15 && '...'}</h3>

        {!count || count === 0 ?
            <div className={styles.manage}>

                <UIButton children={'В корзину'}
                          {...buttonProps}
                          onClick={() =>
                              dispatch(addProduct(new ProductType(title, id, price, imageUrl)))}
                          // imgBefore={'heart'}

                />
            </div>
            : <div className={styles.manage}>

                <UIButton children={'+'}

                          {...buttonProps}
                          onClick={() =>
                              dispatch(incrementProduct(id))

                          }

                />
                <span
                    className={styles.count}
                >{count}</span>
                <UIButton children={'-'}
                          {...buttonProps}

                          onClick={() => dispatch(decrementProduct(id))}
                />

            </div>}


    </div>
}