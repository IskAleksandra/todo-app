import { ACTION_TYPE } from '../actions';

const sortingInitialState = {
	isAlphabetSorting: false,
};

export const sortingReducer = (state = sortingInitialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_IS_ALPHABET_SORTING:
			return { ...state, isAlphabetSorting: action.payload };

		default:
			return state;
	}
};
