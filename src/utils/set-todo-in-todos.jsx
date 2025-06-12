export const setTodoInTodos = (todos, newTodoData) =>
	todos.map((todo) => {
		if (todo.id === newTodoData.id) {
			return {
				...todo,
				...newTodoData,
			};
		}
		return todo;
	});
