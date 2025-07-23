import { ACTION_TYPE } from '../actions/action-type';

const loadingInitialState = false;

export const loadingReducer = (state = loadingInitialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOADING_START:
			return true;

		case ACTION_TYPE.LOADING_END:
			return false;

		default:
			return state;
	}
};
