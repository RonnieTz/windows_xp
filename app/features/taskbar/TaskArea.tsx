'use client';

import * as stylex from '@stylexjs/stylex';
import Task from './Task';
import { useRedux } from '@/app/hooks/useRedux';

const { taskArea } = stylex.create({
  taskArea: {
    height: '100%',
    flex: 1,
    zIndex: 1,
    position: 'relative',
    padding: '5px 2px 0 2px',
    display: 'flex',
  },
});

const TaskArea = () => {
  const { useReduxSelector } = useRedux();
  const tasks = useReduxSelector((state) => state.window.tasks);
  return (
    <div {...stylex.props(taskArea)}>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} />
      ))}
    </div>
  );
};
export default TaskArea;
