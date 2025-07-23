import { Button } from '../button/button';
import styles from './todo.module.css';

export const Todo = ({
	title,
	completed,
	isEditing,
	onEdit,
	onSave,
	onRemove,
	onTitleChange,
	onCompletedChange,
}) => {
	const handleTitleChange = (e) => {
		onTitleChange(e.target.value);
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>

			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						autoFocus
						placeholder="Введите название..."
						onChange={handleTitleChange}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								onSave();
							}
						}}
					/>
				) : (
					<div onClick={onEdit}>{title || <em>Без названия</em>}</div>
				)}
			</div>

			<div>
				{isEditing ? (
					<Button onClick={onSave}>💾</Button>
				) : (
					<Button onClick={onRemove}>🗑</Button>
				)}
			</div>
		</div>
	);
};
