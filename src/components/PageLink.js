import { pageLinks } from '../data';
import PageLinks from './PageLinks';

function PageLink({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLinks link={link} key={link.id} itemClass={itemClass} />;
      })}
    </ul>
  );
}

export default PageLink;
