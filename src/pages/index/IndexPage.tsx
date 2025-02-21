import Section from "../../components/section/Section";
import {useSelector} from "react-redux";
import {getProducts} from "../../services/productSlice";
import Product from "../../components/cards/product/Product";
import Advert from "../../components/cards/advert/Advert";
import Service from "../../components/cards/service/Service";
import {useEffect, useState} from "react";



export default function IndexPage() {
	const productCart = useSelector(getProducts);
	const [isMobile, setIsMobile] = useState(false);
	const [adverts, setAdverts] = useState([]);
	const [products, setProducts] = useState([]);
	const [services, setServices] = useState([]);

	useEffect(() => {
		if (window.innerWidth <= 1024) {
			setIsMobile(true);
		}
		const resize = () => {
			if (window.innerWidth <= 1024) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		}
	}, [window.innerWidth]);

	return (
		<>
			<Section title={'Рекомендации'} tagTitle={'h1'} afterTitle={'на районе'} moreLink={'/adverts'}>
				{adverts.map((advert, index) => (
					<Advert title={advert.title} id={advert.id} imageUrl={advert.imageUrl} key={index}/>
				))}
			</Section>
			<Section title={'Товары'} tagTitle={'h2'} moreLink={'/products'}>
				{products.map((product, index) => (
					productCart.find((cartProduct) =>
						cartProduct.product.getId() === product.id) ? (
						<Product title={product.name}
								 price={product.price}
								 id={product.id}
								 imageUrl={product.imageUrl}
								 key={index}
								 count={productCart
									 .find(cartProduct =>
										 cartProduct.product.getId() === product.id)?.count}
						/> ) :
						<Product title={product.name}
								 price={product.price}
								 id={product.id}
								 imageUrl={product.imageUrl}
								 key={index}
								 />))}



			</Section>
			<Section title={'Услуги'} tagTitle={'h2'} moreLink={'/services'}
					 flexDirection={isMobile ? 'column' : 'row'}
			>
				{services.map((service, index) => (
					<Service title={service.title}
							 busynessName={service.busynessName}
							 price={service.price}
							 id={service.id}
							 imageUrl={service.imageUrl}
							 key={index}
					/>
				))}
			</Section>
		</>
	)
}
