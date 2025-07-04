import { useState, useContext } from 'react';
import { AppContext } from '../../../../context/app-context';
import styles from './sorting.module.css';
import { Button } from '../../../button/button';

export const Sorting = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const { setIsAlphabetSorting } = useContext(AppContext);
	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		setIsAlphabetSorting(target.checked);
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
