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
						onChange={({ target }) => onTitleChange(target.value)}
					/>
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>💾 </Button>
				) : (
					<Button onClick={onRemove}>🗑</Button>
				)}
			</div>
		</div>
	);
};
