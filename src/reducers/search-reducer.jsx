import { ACTION_TYPE } from '../actions/action-type';

const initialState = {
	input: '',
	phrase: '',
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_SEARCH_INPUT:
			return { ...state, input: action.payload };
		case ACTION_TYPE.SET_SEARCH_PHRASE:
			return { ...state, phrase: action.payload };
		default:
			return state;
	}
};
