import * as stylex from '@stylexjs/stylex';
import taskbarImage from '../../../public/taskbar/taskbar.jpg';
import Image from 'next/image';
import Tray from './Tray';
import StartButton from './StartButton';
import TaskArea from './TaskArea';
import StartButtonBackground from './StartButtonBackground';

const { background, taskbar } = stylex.create({
  taskbar: {
    height: 40,
    width: '100%',
    position: 'relative',
    display: 'flex',
  },
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

const Taskbar = () => {
  return (
    <div {...stylex.props(taskbar)}>
      <Image
        {...stylex.props(background)}
        src={taskbarImage}
        alt="Taskbar image"
      />
      <StartButton>
        <StartButtonBackground />
      </StartButton>
      <TaskArea />
      <Tray />
    </div>
  );
};
export default Taskbar;
