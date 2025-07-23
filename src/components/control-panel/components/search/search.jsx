import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../button/button';
import styles from './search.module.css';
import { selectSearchInput } from '../../../../selectors';
import { ACTION_TYPE } from '../../../../actions';

export const Search = () => {
	const value = useSelector(selectSearchInput);
	const dispatch = useDispatch();

	const onChange = ({ target }) =>
		dispatch({ type: ACTION_TYPE.SET_SEARCH_INPUT, payload: target.value });
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: ACTION_TYPE.SET_SEARCH_PHRASE, payload: value });
	};
	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск"
				onChange={onChange}
			/>
			<Button type="submit">🔍</Button>
		</form>
	);
};
