import { ACTION_TYPE } from '../actions/action-type';

const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TODOS:
			return action.payload;

		case ACTION_TYPE.ADD_TODO:
			return [...state, action.payload];

		case ACTION_TYPE.REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.payload);

		case ACTION_TYPE.UPDATE_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
			);

		case ACTION_TYPE.EDIT_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, isEditing: action.payload.isEditing }
					: todo,
			);

		default:
			return state;
	}
};
