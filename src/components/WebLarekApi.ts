import { IWebLarekApi, IProduct, IOrder, IOrderResult } from '../types';

export class WebLarekApi implements IWebLarekApi {
	private readonly baseUrl: string;
	private readonly options: RequestInit;

	constructor(baseUrl: string, options: RequestInit = {}) {
		this.baseUrl = baseUrl;
		this.options = {
			headers: {
				'Content-Type': 'application/json',
				...(options.headers as object ?? {})
			}
		};
	}

	async getProductList(): Promise<IProduct[]> {
		const response = await fetch(`${this.baseUrl}/product`, {
			...this.options,
			method: 'GET'
		});
		return this.checkResponse(response);
	}

	async getProductItem(id: string): Promise<IProduct> {
		const response = await fetch(`${this.baseUrl}/product/${id}`, {
			...this.options,
			method: 'GET'
		});
		return this.checkResponse(response);
	}

	async orderProducts(order: IOrder): Promise<IOrderResult> {
		const response = await fetch(`${this.baseUrl}/order`, {
			...this.options,
			method: 'POST',
			body: JSON.stringify(order)
		});
		return this.checkResponse(response);
	}

	private checkResponse(response: Response): Promise<any> {
		if (response.ok) return response.json();
		throw new Error(response.statusText);
	}
}