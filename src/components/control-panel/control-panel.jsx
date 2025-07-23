import { useDispatch } from 'react-redux';
import { Button } from '../button/button';
import { Search, Sorting } from './components';
import { createTodoAsync } from '../../actions/create-todo-async';
import styles from './control-panel.module.css';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const handleAddTodo = () => {
		dispatch(createTodoAsync());
	};

	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button onClick={handleAddTodo}>✚</Button>
		</div>
	);
};
