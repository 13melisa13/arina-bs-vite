class BaseProduct {
	private name: string = 'baseProduct'
	private readonly id: number = 0
	//private description: string = ''
	private price: number = 0
	// private discount: number | null = null
	private img: string | null = null
	// private categoryId: number | null = null

	constructor(
		name: string,
		id: number,
		// description: string,
		price: number,
		// discount?: number | null | undefined,
		img: string | null,
		// categoryId: number | null = null
	) {
		this.name = name
		this.id = id
		// this.description = description
		this.price = price
		// this.discount = discount
		// this.categoryId = categoryId
		this.img = img
	}
	getName(): string {
		return this.name
	}
	setName(name: string) {
		this.name = name
	}
	getPrice(): number {
		return this.price
	}
	setPrice(price: number) {
		this.price = price
	}
	getId(): number {
		return this.id
	}
	// getDescription(): string {
	// 	return this.description
	// }
	// setDescription(description: string) {
	// 	this.description = description
	// }
	// getDiscount(): number | null {
	// 	return this.discount
	// }
	// setDiscount(discount: number) {
	// 	this.discount = discount
	// }
	getImg(): string | null {
		if (!this.img) {
			return null
		}
		return this.img
	}
	setImg(img: string | null) {
		this.img = img
	}
	// getCategoryId(): number | null {
	// 	return this.categoryId
	// }
	// setCategoryId(categoryId: number) {
	// 	this.categoryId = categoryId
	// }
	toString(): string {
		return `${this.name} - ${this.price}`
	}
}
export { BaseProduct }
