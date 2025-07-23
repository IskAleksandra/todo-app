import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ControlPanel, Todo } from './components';
import { selectTodos, selectSearchPhrase, selectIsAlphabetSorting } from './selectors';
import { readTodosAsync } from './actions';
import { updateTodoAsync, deleteTodoAsync } from './actions';
import { ACTION_TYPE } from './actions/action-type';
import styles from './App.module.css';

export const App = () => {
	const todos = useSelector(selectTodos);
	const searchPhrase = useSelector(selectSearchPhrase);
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(readTodosAsync(searchPhrase, isAlphabetSorting));
	}, [dispatch, searchPhrase, isAlphabetSorting]);

	const onTodoEdit = (id) => {
		dispatch({
			type: ACTION_TYPE.EDIT_TODO,
			payload: { id, isEditing: true },
		});
	};

	const onTodoTitleChange = (id, newTitle) => {
		dispatch({
			type: ACTION_TYPE.UPDATE_TODO,
			payload: { id, title: newTitle },
		});
	};

	const onTodoSave = (id) => {
		const todo = todos.find((t) => t.id === id);
		if (!todo) return;
		dispatch(
			updateTodoAsync({
				id,
				title: todo.title,
				completed: todo.completed,
				isEditing: false,
			}),
		);
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		dispatch(updateTodoAsync({ id, completed: newCompleted }));
	};

	const onTodoRemove = (id) => {
		dispatch(deleteTodoAsync(id));
	};

	return (
		<div className={styles.app}>
			<ControlPanel />
			<div>
				{todos.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						title={title}
						completed={completed}
						isEditing={isEditing}
						onEdit={() => onTodoEdit(id)}
						onSave={() => onTodoSave(id)}
						onRemove={() => onTodoRemove(id)}
						onTitleChange={(value) => onTodoTitleChange(id, value)}
						onCompletedChange={(checked) =>
							onTodoCompletedChange(id, checked)
						}
					/>
				))}
			</div>
		</div>
	);
};
