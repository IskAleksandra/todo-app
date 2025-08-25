import { HTTP_METHOD } from '../constants';

const fetchServer = (method, endpoint, payload) => {
	let url = `http://localhost:4000/todos${endpoint}`;
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (payload) {
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fetchServer('POST', '', newTodo);
export const readTodos = (searchPhrase = '', isAlphabetSorting = false) => {
	let url = '?';
	if (searchPhrase) {
		url += `&title_like=${searchPhrase}`;
	}
	if (isAlphabetSorting) {
		url += `&_sort=title&_order=asc`;
	}
	return fetchServer('GET', url);
};
export const updateTodo = (id, todoData) => fetchServer('PATCH', `/${id}`, todoData);
export const deleteTodo = (id) => fetchServer('DELETE', `/${id}`);
