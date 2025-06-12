import { useState } from 'react';
import { Button } from '../button/button';
import styles from './control-panel.module.css';

export const ControlPanel = ({ onTodoAdd }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value);
	};

	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked);
	};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				value={searchPhrase}
				placeholder="Поиск"
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnabled}
				onChange={onSortingChange}
			/>
			<button onClick={onTodoAdd}>✚</button>
		</div>
	);
};
