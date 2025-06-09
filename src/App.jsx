import { useState, useEffect } from 'react';
import { ControlPanel, Todo } from './components';
import { readTodos } from './api';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos));
	}, []);

	return (
		<div className={styles.app}>
			<ControlPanel />
			<div>
				{todos.map(({ id, title, completed }) => (
					<Todo key={id} title={title} completed={completed} />
				))}
			</div>
		</div>
	);
};
