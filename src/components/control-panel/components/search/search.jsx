import { useState, useContext } from 'react';
import { AppContext } from '../../../../context/app-context';
import { Button } from '../../../button/button';
import styles from './search.module.css';

export const Search = () => {
	const [value, setValue] = useState('');
	const { setSearchPhrase } = useContext(AppContext);

	const onChange = ({ target }) => setValue(target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		setSearchPhrase(value);
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
