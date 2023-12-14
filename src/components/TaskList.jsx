import React from 'react';
import { Task } from './Task';

export const TaskList = ({
	tasks,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<ul>
			{Array.isArray(tasks) && tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			))}
		</ul>
	);
};