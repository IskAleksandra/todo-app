const fetchServer = (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:3002/todos';
	if (id !== undefined) {
		url += `/${id}`;
	}
	return fetch(url, {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
	}).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fetchServer('POST', newTodo);
export const readTodos = () => fetchServer('GET');
export const updateTodo = (todoData) => fetchServer('PATCH', todoData);
export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
