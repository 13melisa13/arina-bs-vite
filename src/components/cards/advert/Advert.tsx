import {Link} from "react-router-dom";
import styles from "./advert.module.scss";

type AdvertProps = {
    title: string
    id: number,
    imageUrl: string | null ,

}
const defaultImageUrl = "https://via.placeholder.com/250"
export default function Advert({...cardProps}: AdvertProps) {
    const {title, id, imageUrl} = cardProps
    if (!title || !id ) return null
    return (
        <Link to={`/adverts/${id}`} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <img
                src={imageUrl || defaultImageUrl}
                alt={''}
                className={styles.background}
                onError={(e) => {
                    e.currentTarget.src = defaultImageUrl
                }}
            />
        </Link>
    )
}