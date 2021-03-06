import axios from 'axios';
import { API_URL } from '../config';

export async function callApi(method: 'get' | 'post' | 'put' | 'delete', path: string, data?: Object | null) {
	try {
		let token = '';
		const res = await axios.request({
			method,
			headers: {
				'X-ACCESS-TOKEN': token,
			},
			url: API_URL + path,
			data: data ? JSON.stringify(data) : null,
		});
		return res.data;
	} catch (e) {
		console.log(e.response, 'Error Api Call');
		console.log('Error', e);
		let error = e;
		if (e.response && e.response.data) error = e.response.data;
		throw error;
	}
}
