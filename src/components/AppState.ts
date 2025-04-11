import { IProduct, IOrder } from '../types';

export class AppState {
	catalog: IProduct[] = [];
	basket: IProduct[] = [];
	preview: string | null = null;
	order: IOrder = {
		payment: '',
		address: '',
		email: '',
		phone: '',
		items: [],
		total: 0
	};

	getTotal(): number {
		return this.basket.reduce((total, item) => total + (item.price || 0), 0);
	}

	clearBasket(): void {
		this.basket = [];
		this.order.items = [];
	}
}