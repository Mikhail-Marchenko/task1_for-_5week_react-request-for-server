import { useEffect, useState } from 'react';
import { Todo } from './components/todo/todo';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((todosData) => todosData.json())
			.then((loadTodos) => setTodos(loadTodos));
	}, []);

	return (
		<div className={styles.App}>
			<div>
				{todos.map(({ id, title }) => (
					<Todo
						key={id}
						title={title}
					/>
				))}
			</div>
		</div>
	);
};
