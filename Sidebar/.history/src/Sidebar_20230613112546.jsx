import logo from './logo.svg';
import {social, links} from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className='sidebar'>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
                <li key={id}>
                    <a href={url}>
                        {icon}
                        {text}
                    </a>
                </li>
            );
        })}
      </ul>
    </aside>
  )
}

export default Sidebar