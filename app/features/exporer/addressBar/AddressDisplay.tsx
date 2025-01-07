import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import icon from '@/public//desktop/FolderOpened.webp';
import { useRef } from 'react';

const styles = stylex.create({
  container: {
    flex: 1,
    borderRadius: 0,
    border: '1.5px solid #7f9db9',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: '100%',
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 12,
    backgroundColor: 'transparent',
    padding: 0,
  },
  icon: {
    width: 20,
    height: 20,
    margin: '0 2px 0 5px',
  },
});

const AddressDisplay = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div {...stylex.props(styles.container)}>
      <Image
        onClick={() => {
          inputRef.current?.focus();
        }}
        {...stylex.props(styles.icon)}
        src={icon}
        alt="folder"
      />
      <input
        spellCheck={false}
        ref={inputRef}
        {...stylex.props(styles.input)}
        type="text"
      />
    </div>
  );
};
export default AddressDisplay;
