import * as stylex from '@stylexjs/stylex';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import { logos } from '@/public/logos';

const styles = stylex.create({
  sidebar: {
    width: 250,
    height: '100%',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: 'white',
    background: 'linear-gradient(180deg, #7aa1e6 0%, #6375d6 100%)',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    position: 'absolute',
    overflow: 'auto',
    scrollbarGutter: 'stable both-edges',
    scrollbarColor: '#c2d5fc #fbfbf9',
    '::-webkit-scrollbar-thumb': {
      border: '1px solid black',
    },
  },
});

const Sidebar = () => {
  const { folder, addressBook, allprograms } = logos;
  return (
    <div {...stylex.props(styles.sidebar)}>
      <Accordion title="Accordion 1">
        <AccordionItem title="Item 1" icon={folder} />
        <AccordionItem title="Item 1" icon={folder} />
        <AccordionItem title="Item 1" icon={folder} />
        <AccordionItem title="Item 1" icon={folder} />
      </Accordion>
      <Accordion title="Accordion 2">
        <AccordionItem title="Item 1" icon={addressBook} />
        <AccordionItem title="Item 2" icon={allprograms} />
      </Accordion>
    </div>
  );
};
export default Sidebar;
