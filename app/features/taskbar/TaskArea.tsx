import * as stylex from '@stylexjs/stylex';

const { taskArea } = stylex.create({
  taskArea: {
    height: '100%',
    flex: 1,
  },
});

const TaskArea = () => {
  return <div {...stylex.props(taskArea)}></div>;
};
export default TaskArea;
