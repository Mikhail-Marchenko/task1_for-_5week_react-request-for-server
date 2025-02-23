import styles from './todo.module.css';

export const Todo = ({ title }) => {
	return <div className={styles.todo}>{title}</div>;
};
