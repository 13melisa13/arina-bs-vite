import styles from "./service.module.scss";
import {UIButton} from "../../ui-button/UIButton";
type ServiceProps = {
    title: string
    id: number,
    busynessName: string,
    imageUrl: string | null,
    price: number

}
const defaultImageUrl = "https://via.placeholder.com/150"
export default function Service({...cardProps}: ServiceProps) {
    const {title, id, busynessName, imageUrl, price} = cardProps
    if (!title || !id ) return null
    return (
        <div className={styles.card}>
            <img src={imageUrl || defaultImageUrl}
                 alt={title} className={styles.background}
            onError={(e) => {
                    e.currentTarget.src = defaultImageUrl
                }}
            />
            <div className={styles.text}>
                <UIButton to={`/services/${id}`} className={styles.link}
                          title={title}
                          paddingTop={0} paddingAside={0}
                          color={'main-black'} backgroundColor={'transparent'}
                >
                <h3 className={styles.title}>{title}</h3>
                </UIButton>
                <p className={styles.busynessName}>{busynessName}</p>
                <p className={styles.price}>{price} руб.</p>
                <UIButton
                    className={styles.button}
                    backgroundColor={'transparent'} onClick={() => {}} children={""} title={"Забронировать"} img={'heart'}/>
            </div>
        </div>
    )
}