import { useContext } from 'react';
import { AppContext } from '../../context/app-context';
import { Button } from '../button/button';
import { Search, Sorting } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = () => {
	const { onTodoAdd } = useContext(AppContext);
	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />

			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
