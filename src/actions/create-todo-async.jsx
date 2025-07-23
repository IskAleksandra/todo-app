import { ACTION_TYPE } from './action-type';
import { createTodo } from '../api';

export const createTodoAsync = () => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	return createTodo({ title: '', completed: false })
		.then((createdTodo) => {
			dispatch({
				type: ACTION_TYPE.ADD_TODO,
				payload: { ...createdTodo, isEditing: true },
			});
		})
		.catch((error) => {
			console.error('Failed to create todo:', error);
		})
		.finally(() => {
			dispatch({ type: ACTION_TYPE.LOADING_END });
		});
};
