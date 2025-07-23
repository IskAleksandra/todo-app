import { useSelector, useDispatch } from 'react-redux';
import styles from './sorting.module.css';
import { Button } from '../../../button/button';
import { selectIsAlphabetSorting } from '../../../../selectors';
import { ACTION_TYPE } from '../../../../actions/action-type';

export const Sorting = () => {
	const isEnabled = useSelector(selectIsAlphabetSorting);
	const dispatch = useDispatch();

	const onChange = ({ target }) => {
		dispatch({
			type: ACTION_TYPE.SET_IS_ALPHABET_SORTING,
			payload: target.checked,
		});
	};

	return (
		<Button className={styles.sortingButton}>
			<input
				className={styles.checkbox}
				id="sorting-button"
				type="checkbox"
				checked={isEnabled}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</Button>
	);
};
